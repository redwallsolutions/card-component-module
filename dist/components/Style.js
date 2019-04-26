import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: Poppins, sans-serif;\n  position: relative;\n  transition: all 0.2s ease;\n  border-radius: 5px;\n  background: ", ";\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.14), 0 3px 10px -2px rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.12);\n  padding: 1em;\n  &:hover ", " {\n    transform: translate(0, -4%);\n    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .56), 0 4px 25px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  top: 0;\n  border-radius: 4px;\n  margin-top: calc(-15% + 2rem);\n  transition: all 0.2s ease;\n  color: ", ";\n  background: ", ";\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .12), 0 4px 25px 0 rgba(0, 0, 0, .2), 0 8px 10px -5px rgba(0, 0, 0, .08);\n  position: relative;\n"]);

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
  var data = _taggedTemplateLiteral(["\n\n  .rc-menu-root {\n    width: auto;\n    padding: 0 !important;\n    border: none !important;\n    cursor: pointer !important;\n    box-shadow: none !important;\n    background: ", ";\n    color:  ", ";\n    &:hover {\n      color:  ", ";\n      background: ", ";\n    }\n  }\n\n  .rc-menu-submenu-arrow::before {\n    content: \"\" !important;\n  }\n\n  .rc-menu-submenu-title {\n    transition: background-color .3s;\n    border-radius: 3px !important;\n    padding: 0 8px !important;\n  }\n\n  .rc-menu-submenu-active > .rc-menu-submenu-title {\n    background-color: ", " !important;\n  }\n\n  .rc-menu-sub {\n    display:flex;\n    justify-content: center;\n    padding: 0px !important;\n    transform-origin: right top !important;\n  }\n\n  .rc-menu-item {\n    padding: 4px 8px !important;\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  font-family: Poppins, sans-serif;\n  position: relative;\n  transition: all 0.2s ease;\n  border-radius: 5px;\n  background: ", ";\n  color: ", ";\n  box-shadow: 0 10px 25px -2px rgba(0,0,0,0.1);\n  padding-left: 0.9em;\n  margin-bottom: 10px;\n  &:after {\n    transition: all 0.2s ease;\n    ", ";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 7px;\n    height: 100%;\n    background: ", ";\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n  &:hover {\n    &:after {\n      width: 10px;\n      opacity: 0.9\n    }\n  }\n  &:active,&:hover {\n    box-shadow: 0 10px 25px -2px rgba(0,0,0,0.15);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: Poppins;\n    src: ", ", format(\"TrueType\");\n    font-display: fallback;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Color from 'color';
import theming from 'styled-theming'; // Config Style

var defaultPrimaryLight = '#E20613';
var defaultSecondaryLight = '#f8694f';
var defaultDefaultLight = '#dfe0e2';
var defaultPrimaryContrastLight = '#f9f9f9';
var defaultSecondaryContrastLight = '#fff';
var defaultDefaultLightContrast = '#2e3439';
var defaultPrimaryDark = 'rgba(85, 95, 98, 1)';
var defaultSecondaryDark = 'rgba(92, 59, 59, 1)';
var defaultPrimaryContrastDark = '#fffaf9';
var defaultSecondaryContrastDark = '#f7f0f0';
var defaultTheme = {
  theme: {
    mode: 'light'
  }
};

var defaultProps = _objectSpread({}, defaultTheme);

var theme = theming.variants('mode', 'appearance', {
  primary: {
    light: {
      color: function color(props) {
        return props.theme.primary || defaultPrimaryLight;
      },
      contrast: function contrast(props) {
        return props.theme.primaryContrast || defaultPrimaryContrastLight;
      }
    },
    dark: {
      color: function color(props) {
        return props.theme.primaryDark || defaultPrimaryDark;
      },
      contrast: function contrast(props) {
        return props.theme.primaryDarkContrast || defaultPrimaryContrastDark;
      }
    }
  },
  secondary: {
    light: {
      color: function color(props) {
        return props.theme.secondary || defaultSecondaryLight;
      },
      contrast: function contrast(props) {
        return props.theme.secondaryContrast || defaultSecondaryContrastLight;
      }
    },
    dark: {
      color: function color(props) {
        return props.theme.secondaryDark || defaultSecondaryDark;
      },
      contrast: function contrast(props) {
        return props.theme.secondaryDarkContrast || defaultSecondaryContrastDark;
      }
    }
  },
  default: {
    light: {
      color: function color(props) {
        return props.theme.default || defaultDefaultLight;
      },
      contrast: function contrast(props) {
        return props.theme.defaultContrast || defaultDefaultLightContrast;
      }
    },
    dark: {
      color: function color(props) {
        return props.theme.defaultDark || Color(defaultDefaultLight).darken(0.1).string();
      },
      contrast: function contrast(props) {
        return props.theme.defaultDarkContrast || props.theme.defaultDefaultLightContrast;
      }
    }
  }
});
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
  return theme(props).color(props);
}, function (props) {
  return theme(props).contrast(props);
}, function (props) {
  return theme(props).color(props);
}, function (props) {
  return theme(props).contrast(props);
}, function (props) {
  return Color(theme(props).contrast(props)).darken(0.1).string();
});
export var CardVerticalLineContent = styled.div(_templateObject5());
CardVerticalLineWrapper.defaultProps = {
  appearance: 'primary'
};
CustomMenuStyles.defaultProps = {
  appearance: 'primary' // CardFloatHeaderComponent

};
export var CardFloatHeaderHeader = styled.div(_templateObject6(), function (props) {
  return theme(props).color(props);
}, function (props) {
  return "linear-gradient(to right top, ".concat(theme(props).contrast(props), ",\n   ").concat(Color(theme(props).contrast(props)).darken(0.1).string(), ",\n   ").concat(Color(theme(props).contrast(props)).darken(0.2).string(), ",\n   ").concat(Color(theme(props).contrast(props)).darken(0.3).string(), ",\n   ").concat(Color(theme(props).contrast(props)).darken(0.4).string(), ")");
});
export var CardFloatHeaderWrapper = styled.div(_templateObject7(), function (props) {
  return Color(theme(props).color(props)).fade(0.7).string();
}, CardFloatHeaderHeader);
CardFloatHeaderWrapper.defaultProps = {
  appearance: 'primary'
};
CardFloatHeaderHeader.defaultProps = {
  appearance: 'primary'
};