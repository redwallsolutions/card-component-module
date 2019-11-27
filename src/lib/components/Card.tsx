import React, { FC, useState, useEffect, useContext } from 'react'
import {
	Reset,
	Container,
	CardHeader,
	Thumbnail,
	HeaderTextContainer,
	HeaderText,
	Subhead,
	Menu,
	Media,
	CardBody,
	SupportingText,
	Actions,
	ActionContainer
} from './Style'
import { More } from '../assets/Icons'
import Dropdown from '@redwallsolutions/dropdown-component-module'
import Button from '@redwallsolutions/button-component-module'
import { ICard, ICardStyled, Action } from './interfaces'
import { ThemeContext } from 'styled-components'
import Ink from 'react-ink'

const Card: FC<ICard & ICardStyled> = ({
	theme = { mode: 'light' },
	shouldFitContainer,
	headerText,
	subHead,
	menuOptions,
	media,
	supportingText,
	children,
	actions
}) => {
	const [MenuVisibility, setMenuVisibility] = useState(false)
	const documentClickHandler = () => {
		if (MenuVisibility) toggleMenuVisibility()
		document.removeEventListener('click', documentClickHandler)
	}

	useEffect(() => {
		document.addEventListener('click', documentClickHandler)
	}, [MenuVisibility])

	const toggleMenuVisibility = () => {
		setMenuVisibility(!MenuVisibility)
	}

	const themeToApply = useContext(ThemeContext) || theme
	return (
		<div className="card-component-module">
			<Reset />
			<Container shouldFitContainer={shouldFitContainer}>
				{headerText && (
					<CardHeader media={media}>
						<Thumbnail />
						<HeaderTextContainer theme={themeToApply}>
							<HeaderText title={headerText}>{headerText}</HeaderText>
							<Subhead title={subHead}>{subHead}</Subhead>
						</HeaderTextContainer>
						{menuOptions && (
							<Menu onClick={toggleMenuVisibility}>
								<Ink />
								<More />
								<Dropdown visible={MenuVisibility} items={menuOptions} />
							</Menu>
						)}
					</CardHeader>
				)}
				{media && (
					<Media
						src={media}
						supportingText={supportingText}
						headerText={headerText}
					/>
				)}
				{(supportingText || children)&& (
					<CardBody media={media}>
						<SupportingText>{supportingText}</SupportingText>
						{children}
						{actions && (
							<Actions>
								{actions.map((action: Action, index) => (
									<ActionContainer key={index}>
										<Button
											onClick={action.handler}
											variant={action.variant || 'text'}
											appearance={action.appearance}
										>
											{action.text}
										</Button>
									</ActionContainer>
								))}
							</Actions>
						)}
					</CardBody>
				)}
			</Container>
		</div>
	)
}

export default Card
