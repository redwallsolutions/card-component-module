import styled, { createGlobalStyle } from 'styled-components'
import Color from 'color'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import { ICard, ICardStyled } from './interfaces'
import { ImgHTMLAttributes } from 'react'

const theming = createThemeWithAppearance()

export const Reset = createGlobalStyle`
  .card-component-module {
    font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif;
    padding: 0;
	margin: 0;
    &, * {
      transition: .2s;
	  box-sizing: border-box; 
    }
  }
`
export const Container = styled.div<ICardStyled>`
	position: relative;
	min-width: 344px;
	width: ${props => (props.shouldFitContainer ? '100%' : '344px')};
	border-radius: 4px;
	box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1), 0 0px 5px 0 rgba(0, 0, 0, 0.05);
	&:hover {
		box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.15);
	}
	cursor: pointer;
`

export const CardHeader = styled.header<ICard>`
	border-radius: 4px;
	border-bottom-left-radius: ${props => (props.media ? 0 : 4)}px;
	border-bottom-right-radius: ${props => (props.media ? 0 : 4)}px;
	height: 72px;
	background-color: white;
	display: flex;
	align-items: center;
	padding-left: 16px;
	position: relative;
`

export const Thumbnail = styled.i`
	width: 40px;
	height: 40px;
	min-width: 40px;
	min-height: 40px;
	border-radius: 50%;
	background-color: #d2d2d2;
`

export const HeaderTextContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-left: 16px;
`
export const HeaderText = styled.h1`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 70%;
	font-size: 20px;
	font-weight: bold;
	margin: 0;
	padding: 0;
`

export const Subhead = styled.h2`
	font-size: 14px;
	font-weight: lighter;
	color: gray;
	letter-spacing: 0.9px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 70%;
	margin: 0;
	padding: 0;
`

export const Menu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 16px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
	svg * {
		fill: gray;
	}
	&:active {
		background-color: #d2d2d2;
	}
`
export const Media = styled.div<ImgHTMLAttributes<HTMLImageElement> & ICard>`
	height: 194px;
	border-bottom-left-radius: ${props => (props.supportingText ? 0 : 4)}px;
	border-bottom-right-radius: ${props => (props.supportingText ? 0 : 4)}px;
	border-top-left-radius: ${props => (props.headerText ? 0 : 4)}px;
	border-top-right-radius: ${props => (props.headerText ? 0 : 4)}px;
	background-color: gray;
	background-image: url(${props => props.src});
	background-size: cover;
	background-repeat: no-repeat;
`

export const CardBody = styled.div<ICard>`
	position: relative;
	height: 116px;
	padding: 16px;
	background-color: #fff;
	border-radius: 4px;
	border-top-left-radius: ${props => (props.media ? 0 : 4)}px;
	border-top-right-radius: ${props => (props.media ? 0 : 4)}px;
`
export const SupportingText = styled.p`
	font-size: 14px;
	line-height: 20px;
	padding: 0;
	margin: 0;
	color: #00000099;
`

export const Actions = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 0;
	padding-left: 16px;
	padding-bottom: 8px;
`

export const ActionContainer = styled.div`
	display: inline;
	margin: 0 4px;
`
export const Icon = styled.i``
