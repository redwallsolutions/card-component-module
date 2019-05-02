import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { CardFloatHeaderWrapper, CardFloatHeaderHeader, CardFloatHeaderContent } from './Style';
import { MdMoreHoriz } from 'react-icons/md';
import Menu, { SubMenu, Item } from 'rc-menu';
export var CardFloatHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(CardFloatHeader, _Component);

  function CardFloatHeader() {
    _classCallCheck(this, CardFloatHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardFloatHeader).apply(this, arguments));
  }

  _createClass(CardFloatHeader, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "card-component-module"
      }, React.createElement(CardFloatHeaderWrapper, {
        appearance: this.props.appearance
      }, React.createElement(CardFloatHeaderHeader, {
        appearance: this.props.appearance
      }, this.props.header), React.createElement(CardFloatHeaderContent, null, this.props.children)));
    }
  }]);

  return CardFloatHeader;
}(Component);
export default CardFloatHeader;