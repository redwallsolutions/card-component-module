import React, { Component, PropTypes } from 'react';
import Menu, { SubMenu, Item } from 'rc-menu';
import 'rc-menu/assets/index.css';
import {CardVerticalLineWrapper, CardVerticalLineContent, CardVerticalLineTopActions, CustomMenuStyles, GlobalStyle} from './Style';

export class CardVerticalLine extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.appearance);
    return (
      <React.Fragment>
        <GlobalStyle/>
        <CardVerticalLineWrapper appearance={this.props.appearance}>
          {this.props.actions ? (
            <CardVerticalLineTopActions>
              <Menu mode='vertical-left' triggerSubMenuAction='click' openAnimation='zoom'>
                <SubMenu title={'...'} key="1">
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
      </React.Fragment>
    );
  }
}

export default CardVerticalLine;
