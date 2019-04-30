import React, { Component } from 'react';
import {CardFloatHeaderWrapper, CardFloatHeaderHeader} from './Style';
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
          {this.props.children}

          {
            this.props.actions ? (
              <Menu mode='vertical-left' triggerSubMenuAction='click' openAnimation='zoom'>
                <SubMenu title={<MdMoreHoriz/>} key="1">
                  {
                    this.props.actions.map((action, index) => (
                      <Item onClick={action.event} key={index}>
                        {action.name}
                      </Item>
                    ))
                  }
                </SubMenu>
              </Menu>
            ) : null
          }

        </CardFloatHeaderWrapper>
      </div>
    );
  }
}

export default CardFloatHeader;
