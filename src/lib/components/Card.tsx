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
import Skeleton from '@redwallsolutions/skeleton-loader-component-module'

const Card: FC<ICard & ICardStyled> = ({
	isReady = false,
	theme = { mode: 'light' },
	appearance = 'default',
	thumbnail,
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
			<Container
				shouldFitContainer={shouldFitContainer}
				theme={themeToApply}
				appearance={appearance}
			>
				{headerText && (
					<CardHeader media={media}>
						{thumbnail && <Thumbnail  appearance={appearance} theme={themeToApply}>{thumbnail}</Thumbnail>}
						<HeaderTextContainer>
							<HeaderText title={headerText}>
								{isReady ? headerText : <Skeleton />}
							</HeaderText>
							<Subhead title={subHead}>
								{isReady ? subHead : <Skeleton width={100} />}
							</Subhead>
						</HeaderTextContainer>
						{menuOptions && isReady && (
							<Menu
								onClick={toggleMenuVisibility}
								theme={themeToApply}
								appearance={appearance}
							>
								<Ink />
								<More />
								<Dropdown
									visible={MenuVisibility}
									items={menuOptions}
									theme={themeToApply}
									appearance={appearance}
								/>
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
				{(supportingText || children || actions) && (
					<CardBody media={media}>
						{supportingText && (
							<SupportingText>
								{isReady ? supportingText : <Skeleton />}
							</SupportingText>
						)}
						{children}
						{actions && (
							<Actions>
								{actions.map((action: Action, index) => (
									<ActionContainer key={index}>
										<Button
											onClick={action.handler}
											variant={action.variant || 'text'}
											appearance={action.appearance}
											theme={themeToApply}
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
