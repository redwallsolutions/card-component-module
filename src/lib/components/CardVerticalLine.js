import React, { Component } from 'react';
import Menu, { SubMenu, Item } from 'rc-menu';
import 'rc-menu/assets/index.css';
import { MdMoreHoriz } from 'react-icons/md';
import {CardVerticalLineWrapper, CardVerticalLineContent, CardVerticalLineTopActions, CustomMenuStyles, GlobalStyle} from './Style';

export class CardVerticalLine extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='card-component-module'>
        <GlobalStyle/>
        <CardVerticalLineWrapper appearance={this.props.appearance}>
          {this.props.actions ? (
            <CardVerticalLineTopActions>
              <Menu mode='vertical-right' triggerSubMenuAction='click' openAnimation='zoom'>
                <SubMenu title={<MdMoreHoriz size='1.5em'/>} key="1">
                  {
                    this.props.actions.map((action, index) => (
                      <Item onClick={action.event} key={index}>
                        {action.name}
                      </Item>
                    ))
                  }
                </SubMenu>
              </Menu>
              <CustomMenuStyles appearance={this.props.appearance}/>
            </CardVerticalLineTopActions>
          ) : null}
          <CardVerticalLineContent>
            {this.props.children}
          </CardVerticalLineContent>
        </CardVerticalLineWrapper>
      </div>
    );
  }
}

export default CardVerticalLine;
