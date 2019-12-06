import { ICommonProps, IAppearance } from '@redwallsolutions/common-interfaces-ts'
import { MouseEvent } from 'react'
import { Variant } from '@redwallsolutions/button-component-module/dist/components/interfaces'

export interface MenuOption {
	text: string
	handler?: (event: MouseEvent<HTMLElement>) => void
}

export interface Action extends MenuOption {
	variant?: Variant
	appearance?: IAppearance
}

export interface ICardStyled extends ICommonProps {
	shouldFitContainer?: boolean
}

export interface ICard extends ICommonProps {
	isReady?:boolean
	headerText?: string
	subHead?: string
    menuOptions?: MenuOption[]
    media?:string
	supportingText?:string
	actions?: Action[]
}
