import styled, {createGlobalStyle} from 'styled-components'
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Color from 'color';
import theming from 'styled-theming';

const defaultPrimaryLight = '#E20613'
const defaultSecondaryLight = '#f8694f'
const defaultDefaultLight = '#dfe0e2'
const defaultPrimaryContrastLight = '#f9f9f9'
const defaultSecondaryContrastLight = '#fff'
const defaultDefaultLightContrast = '#2e3439'
const defaultPrimaryDark = 'rgba(85, 95, 98, 1)'
const defaultSecondaryDark = 'rgba(92, 59, 59, 1)'
const defaultPrimaryContrastDark = '#fffaf9'
const defaultSecondaryContrastDark = '#f7f0f0'

const defaultTheme = {
  theme: {
    mode: 'light'
  }
}

const defaultProps = {...defaultTheme}

const theme = theming.variants('mode', 'appearance', {
  primary: {
    light: {
      color: props => props.theme.primary || defaultPrimaryLight,
      contrast: props => props.theme.primaryContrast || defaultPrimaryContrastLight
    },
    dark: {
      color: props => props.theme.primaryDark || defaultPrimaryDark,
      contrast: props => props.theme.primaryDarkContrast || defaultPrimaryContrastDark
    }
  },
  secondary: {
    light: {
      color: props => props.theme.secondary || defaultSecondaryLight,
      contrast: props => props.theme.secondaryContrast || defaultSecondaryContrastLight
    },
    dark: {
      color: props => props.theme.secondaryDark || defaultSecondaryDark,
      contrast: props => props.theme.secondaryDarkContrast || defaultSecondaryContrastDark
    }
  },
  default: {
    light: {
      color: props => props.theme.default || defaultDefaultLight,
      contrast: props => props.theme.defaultContrast || defaultDefaultLightContrast
    },
    dark: {
      color: props => props.theme.defaultDark || Color(defaultDefaultLight).darken(0.1).string(),
      contrast: props => props.theme.defaultDarkContrast || props.theme.defaultDefaultLightContrast
    }
  }
})

export const GlobalStyle = createGlobalStyle `
  @font-face {
    font-family: Poppins;
    src: ${Poppins}, format("TrueType");
    font-display: fallback;
  }
`

export const primary = '#EF5350';
export const primaryLight = 'rgba(238, 83, 80, 0.13)'

export const CardVerticalLineWrapper = styled.div `
  font-family: Poppins, sans-serif;
  position: relative;
  transition: all 0.2s ease;
  border-radius: 5px;
  background: ${props => theme(props).contrast(props)};
  box-shadow: 0 10px 25px -2px rgba(0,0,0,0.1);
  padding-left: 0.9em;
  margin-bottom: 10px;
  &:after {
    transition: all 0.2s ease;
    ${props => props.isFull ?  '': 'content: ""'};
    position: absolute;
    top: 0;
    left: 0;
    width: 7px;
    height: 100%;
    background: ${props => theme(props).color(props)};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:hover {
    &:after {
      width: 10px;
      opacity: 0.9
    }
  }
  &:active,&:hover {
    box-shadow: 0 10px 25px -2px rgba(0,0,0,0.15);
  }
`;

export const CardVerticalLineTopActions = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: .2em;
  margin-bottom: 10px;
`

export const CustomMenuStyles = createGlobalStyle`

  .rc-menu-root {
    width: auto;
    padding: 0 !important;
    border: none !important;
    cursor: pointer !important;
    box-shadow: none !important;
    background: ${props => theme(props).color(props)};
    color:  ${props => theme(props).contrast(props)};
    &:hover {
      color:  ${props => theme(props).color(props)};
    }
  }

  .rc-menu-submenu-arrow::before {
    content: "" !important;
  }

  .rc-menu-submenu-title {
    transition: background-color .3s;
    border-radius: 3px !important;
    padding: 0 8px !important;
  }

  .rc-menu-item-active, .rc-menu-submenu-active > .rc-menu-submenu-title {
    background-color: rgb(231, 233, 238) !important;
  }

  .rc-menu-sub {
    display:flex;
    justify-content: center;
    padding: 0px !important;
    transform-origin: right top !important;
  }

  .rc-menu-item {
    padding: 4px 8px !important;
    cursor: pointer;
    width: 100%;
    text-align: center;
  }
`

export const CardVerticalLineContent = styled.div `
  padding: 0 0 2em 0;
`;

CardVerticalLineWrapper.defaultProps = {appearance: 'primary'}
CustomMenuStyles.defaultProps = {appearance: 'primary'}
