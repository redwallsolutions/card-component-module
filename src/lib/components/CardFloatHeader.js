import React, { Component } from 'react';
import {CardFloatHeaderWrapper, CardFloatHeaderHeader, CardFloatHeaderContent} from './Style';
import { MdMoreHoriz } from 'react-icons/md';
import Menu, { SubMenu, Item } from 'rc-menu';

export class CardFloatHeader extends Component {
  render() {
    return (
      <div className='card-component-module'>
        <CardFloatHeaderWrapper appearance={this.props.appearance}>
          <CardFloatHeaderHeader appearance={this.props.appearance}>
            {this.props.header}
          </CardFloatHeaderHeader>
          <CardFloatHeaderContent>{this.props.children}</CardFloatHeaderContent>
        </CardFloatHeaderWrapper>
      </div>
    );
  }
}

export default CardFloatHeader;
