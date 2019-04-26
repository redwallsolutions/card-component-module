import styled, {createGlobalStyle} from 'styled-components'
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Color from 'color';
import Theming from 'theming-component-module';

const theme = Theming.createThemeWithAppearance();

export const GlobalStyle = createGlobalStyle `
  @font-face {
    font-family: Poppins;
    src: ${Poppins}, format("TrueType");
    font-display: fallback;
  }
`

// CardVerticalLineComponent

export const CardVerticalLineWrapper = styled.div `
  font-family: Poppins, sans-serif;
  position: relative;
  transition: all 0.2s ease;
  border-radius: 5px;
  background: ${props => theme(props).contrast(props)};
  color: ${props => theme(props).color(props)};
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
      background: ${props => theme(props).contrast(props)};
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

  .rc-menu-submenu-active > .rc-menu-submenu-title {
    background-color: ${props => Color(theme(props).contrast(props)).darken(0.1).string()} !important;
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

// CardFloatHeaderComponent

export const CardFloatHeaderHeader = styled.div `
  width: 100%;
  top: 0;
  border-radius: 4px;
  margin-top: calc(-15% + 2rem);
  transition: all 0.2s ease;
  color: ${props => theme(props).color(props)};
  background: ${props => (`linear-gradient(to right top, ${theme(props).contrast(props)},
   ${Color(theme(props).contrast(props)).darken(0.1).string()},
   ${Color(theme(props).contrast(props)).darken(0.2).string()},
   ${Color(theme(props).contrast(props)).darken(0.3).string()},
   ${Color(theme(props).contrast(props)).darken(0.4).string()})`)};
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .12), 0 4px 25px 0 rgba(0, 0, 0, .2), 0 8px 10px -5px rgba(0, 0, 0, .08);
  position: relative;
`;

export const CardFloatHeaderWrapper = styled.div `
  font-family: Poppins, sans-serif;
  position: relative;
  transition: all 0.2s ease;
  border-radius: 5px;
  background: ${props => Color(theme(props).color(props)).fade(0.7).string()};
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.14), 0 3px 10px -2px rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.12);
  padding: 1em;
  &:hover ${CardFloatHeaderHeader} {
    transform: translate(0, -4%);
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .56), 0 4px 25px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
  }
`;

CardFloatHeaderWrapper.defaultProps = {appearance: 'primary'}
CardFloatHeaderHeader.defaultProps = {appearance: 'primary'}
