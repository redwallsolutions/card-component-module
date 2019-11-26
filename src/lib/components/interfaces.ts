import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
import { MouseEvent } from 'react'

export interface MenuOption {
	text: string
	handler?: (event: MouseEvent<HTMLElement>) => void
}

export interface ICardStyled extends ICommonProps {
	shouldFitContainer?: boolean
}

export interface ICard extends ICommonProps {
	headerText?: string
	subHead?: string
    menuOptions?: MenuOption[]
    media?:string
    supportingText?:string
}
