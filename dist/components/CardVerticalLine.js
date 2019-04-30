import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, PropTypes } from 'react';
import Menu, { SubMenu, Item } from 'rc-menu';
import 'rc-menu/assets/index.css';
import { MdMoreHoriz } from 'react-icons/md';
import { CardVerticalLineWrapper, CardVerticalLineContent, CardVerticalLineTopActions, CustomMenuStyles, GlobalStyle } from './Style';
export var CardVerticalLine =
/*#__PURE__*/
function (_Component) {
  _inherits(CardVerticalLine, _Component);

  function CardVerticalLine() {
    _classCallCheck(this, CardVerticalLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardVerticalLine).apply(this, arguments));
  }

  _createClass(CardVerticalLine, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(GlobalStyle, null), React.createElement(CardVerticalLineWrapper, {
        appearance: this.props.appearance
      }, this.props.actions ? React.createElement(CardVerticalLineTopActions, null, React.createElement(Menu, {
        mode: "vertical-right",
        triggerSubMenuAction: "click",
        openAnimation: "zoom"
      }, React.createElement(SubMenu, {
        title: React.createElement(MdMoreHoriz, {
          size: "1.5em"
        }),
        key: "1"
      }, this.props.actions.map(function (action, index) {
        return React.createElement(Item, {
          onClick: action.event,
          key: index
        }, action.name);
      }))), React.createElement(CustomMenuStyles, {
        appearance: this.props.appearance
      })) : null, React.createElement(CardVerticalLineContent, null, this.props.children)));
    }
  }]);

  return CardVerticalLine;
}(Component);
export default CardVerticalLine;