import styled, {createGlobalStyle} from 'styled-components'
import Color from 'color';
import Theming from 'theming-component-module';

const theme = Theming.createThemeWithAppearance();

export const GlobalStyle = createGlobalStyle `
  .card-component-module {
    font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif;
  }
`

// CardVerticalLineComponent

export const CardVerticalLineWrapper = styled.div `
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
    padding: 0 !important;
    margin: 0 !important;
    cursor: pointer !important;
    box-shadow: none !important;
    border: none !important;
    background: none !important;
  }

  .rc-menu-item-active, .rc-menu-submenu-active > .rc-menu-submenu-title {
    background: none !important;
  }

  .rc-menu-item-active {
    background: ${props => theme(props).color} !important;
    color: ${props => theme(props).contrast} !important;
  }

  .rc-menu-submenu-selected {
    background: none !important;
  }

  .rc-menu-submenu-title {
    background: none;
    padding: 0 !important;
    margin: 0 !important;
    transition: background-color .3s;
    border-radius: 3px !important;
    color: ${props => Color(theme(props).color(props)).grayscale().lighten(0.3).string()}
  }

  .rc-menu-sub {
    transform-origin: right top !important;
    width: 100% !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1)!important;
    background: ${props => Color(theme(props).contrast(props)).lighten(0.3).string()} !important;
    color: ${props => theme(props).color} !important;
  }

  .rc-menu-submenu-arrow::before {
    content: "" !important;
  }

  li.rc-menu-item {
   font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif;
   cursor: pointer !important;
   width: auto !important;
   transition: background-color .3s;
   border: none !important;
   padding: 8px !important;
   text-align: center;
   border-radius: 2px !important;
  }
  li.rc-menu-item-selected {
    background: ${props => Color(theme(props).color(props)).fade(.9).string()}
  }
`

export const CardVerticalLineContent = styled.div `
  padding: 0 0 2em 0;
`;

CardVerticalLineWrapper.defaultProps = {appearance: 'primary'}
CustomMenuStyles.defaultProps = {appearance: 'primary'}

// CardFloatHeaderComponent

export const CardFloatHeaderHeader = styled.div `
  position: absolute;
  width: 94%;
  top: -20px;
  left: 3%;
  border-radius: 4px;
  transition: all 0.2s ease;
  color: ${props => theme(props).contrast(props)};
  background: ${props => (`linear-gradient(45deg, ${Color(theme(props).color(props)).lighten(0.5).string()},${theme(props).color(props)})`)};
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .12), 0 4px 25px 0 rgba(0, 0, 0, .2), 0 8px 10px -5px rgba(0, 0, 0, .08);
`;

export const CardFloatHeaderWrapper = styled.div `
  position: relative;
  transition: all 0.2s ease;
  border-radius: 5px;
  background: ${props => Color(theme(props).contrast(props)).string()};
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.14), 0 3px 10px -2px rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.12);
  padding: 1em 0;
  &:hover ${CardFloatHeaderHeader} {
    transform: translate(0, -2%);
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .56), 0 4px 25px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
  }
`;

export const CardFloatHeaderContent = styled.div`
  padding: 2px;
  margin: 0;
`

CardFloatHeaderWrapper.defaultProps = {appearance: 'primary'}
CardFloatHeaderHeader.defaultProps = {appearance: 'primary'}
