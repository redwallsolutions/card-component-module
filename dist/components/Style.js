import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 2px;\n  margin: 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  transition: all 0.2s ease;\n  border-radius: 5px;\n  background: ", ";\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.14), 0 3px 10px -2px rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.12);\n  padding: 1em;\n  &:hover ", " {\n    transform: translate(0, -2%);\n    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .56), 0 4px 25px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 94%;\n  top: -20px;\n  left: 3%;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  color: ", ";\n  background: ", ";\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .12), 0 4px 25px 0 rgba(0, 0, 0, .2), 0 8px 10px -5px rgba(0, 0, 0, .08);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 0 2em 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  .rc-menu-root {\n    padding: 0 !important;\n    margin: 0 !important;\n    cursor: pointer !important;\n    box-shadow: none !important;\n    border: none !important;\n    background: none !important;\n  }\n\n  .rc-menu-item-active, .rc-menu-submenu-active > .rc-menu-submenu-title {\n    background: none !important;\n  }\n\n  .rc-menu-item-active {\n    background: ", " !important;\n    color: ", " !important;\n  }\n\n  .rc-menu-submenu-selected {\n    background: none !important;\n  }\n\n  .rc-menu-submenu-title {\n    background: none;\n    padding: 0 !important;\n    margin: 0 !important;\n    transition: background-color .3s;\n    border-radius: 3px !important;\n    color: ", "\n  }\n\n  .rc-menu-sub {\n    transform-origin: right top !important;\n    width: 100% !important;\n    box-shadow: 0 4px 15px rgba(0,0,0,0.1)!important;\n    background: ", " !important;\n    color: ", " !important;\n  }\n\n  .rc-menu-submenu-arrow::before {\n    content: \"\" !important;\n  }\n\n  li.rc-menu-item {\n  font-family: Poppins, cursive;\n   cursor: pointer !important;\n   width: auto !important;\n   transition: background-color .3s;\n   border: none !important;\n   padding: 8px !important;\n   text-align: center;\n   border-radius: 2px !important;\n  }\n  li.rc-menu-item-selected {\n    background: ", "\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: .2em;\n  margin-bottom: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  transition: all 0.2s ease;\n  border-radius: 5px;\n  background: ", ";\n  color: ", ";\n  box-shadow: 0 10px 25px -2px rgba(0,0,0,0.1);\n  padding-left: 0.9em;\n  margin-bottom: 10px;\n  &:after {\n    transition: all 0.2s ease;\n    ", ";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 7px;\n    height: 100%;\n    background: ", ";\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n  &:hover {\n    &:after {\n      width: 10px;\n      opacity: 0.9\n    }\n  }\n  &:active,&:hover {\n    box-shadow: 0 10px 25px -2px rgba(0,0,0,0.15);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: Poppins;\n    src: ", ", format(\"TrueType\");\n    font-display: fallback;\n  }\n\n  .card-component-module * {\n    font-family: Poppins, cursive;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Color from 'color';
import Theming from 'theming-component-module';
var theme = Theming.createThemeWithAppearance();
export var GlobalStyle = createGlobalStyle(_templateObject(), Poppins); // CardVerticalLineComponent

export var CardVerticalLineWrapper = styled.div(_templateObject2(), function (props) {
  return theme(props).contrast(props);
}, function (props) {
  return theme(props).color(props);
}, function (props) {
  return props.isFull ? '' : 'content: ""';
}, function (props) {
  return theme(props).color(props);
});
export var CardVerticalLineTopActions = styled.div(_templateObject3());
export var CustomMenuStyles = createGlobalStyle(_templateObject4(), function (props) {
  return theme(props).color;
}, function (props) {
  return theme(props).contrast;
}, function (props) {
  return Color(theme(props).color(props)).grayscale().lighten(0.3).string();
}, function (props) {
  return Color(theme(props).contrast(props)).lighten(0.3).string();
}, function (props) {
  return theme(props).color;
}, function (props) {
  return Color(theme(props).color(props)).fade(.9).string();
});
export var CardVerticalLineContent = styled.div(_templateObject5());
CardVerticalLineWrapper.defaultProps = {
  appearance: 'primary'
};
CustomMenuStyles.defaultProps = {
  appearance: 'primary' // CardFloatHeaderComponent

};
export var CardFloatHeaderHeader = styled.div(_templateObject6(), function (props) {
  return theme(props).contrast(props);
}, function (props) {
  return "linear-gradient(45deg, ".concat(Color(theme(props).color(props)).lighten(0.5).string(), ",").concat(theme(props).color(props), ")");
});
export var CardFloatHeaderWrapper = styled.div(_templateObject7(), function (props) {
  return Color(theme(props).contrast(props)).string();
}, CardFloatHeaderHeader);
export var CardFloatHeaderContent = styled.div(_templateObject8());
CardFloatHeaderWrapper.defaultProps = {
  appearance: 'primary'
};
CardFloatHeaderHeader.defaultProps = {
  appearance: 'primary'
};