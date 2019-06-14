import React from 'react';
import { render } from "react-dom";
import {ThemeProvider}  from 'styled-components';
import Color from 'color';
import {CardVerticalLine, CardFloatHeader} from './lib'


export default class App extends React.Component {

  state = {
    theme: {mode:'dark'}
  }

  onChangeTheme = (input) => {
    this.setState({
      theme:{
        mode: input.target.id
      }
    });
  }

  randomizeATheme = () => {
    const newTheme = {...this.state.theme}
    function random256(){
      return Math.floor(Math.random() * 256)
    }
    function getRandomColor() {
      return Color.rgb(random256(), random256(), random256()).string()
    }
    newTheme.primary = getRandomColor()
    newTheme.primaryContrast = Color(newTheme.primary).negate().string();
    newTheme.secondary = getRandomColor()
    newTheme.secondaryContrast = Color(newTheme.secondary).negate().string();
    newTheme.primaryDark = Color(newTheme.primary).darken(0.4).string()
    newTheme.primaryDarkContrast = Color(newTheme.primaryDark).negate().string()
    newTheme.secondaryDark = getRandomColor()
    newTheme.secondaryDarkContrast = Color(newTheme.secondaryDark).negate().string()
    newTheme.default = getRandomColor()
    newTheme.defaultContrast = Color(newTheme.default).negate().string()
    newTheme.defaultDark = getRandomColor()
    newTheme.defaultDarkContrast = Color(newTheme.defaultDark).negate().string()
    this.setState({
      theme: newTheme
    });
  }

  render() {
    return (
      <div style={{maxWidth: '100vw'}}>
        <ThemeProvider theme={{...this.state.theme, primaryContrastDark: '#2b324c', primaryDark: '#EBEBEB'}}>
          <React.Fragment>
            <div style={{display:'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '2em'}}>
              <div>
                <label htmlFor='dark'>Dark Theme</label>
                <input type='radio' id='dark' name='theme' onChange={this.onChangeTheme}></input>
              </div>
              <div>
                <label htmlFor='light'>Light Theme</label>
                <input type='radio' id='light' name='theme' onChange={this.onChangeTheme}></input>
              </div>
              <div>
                <label htmlFor='random'>Random Theme</label>
                <input type='radio' id='random' name='theme' onChange={e => this.randomizeATheme()}></input>
              </div>
            </div>
            <CardVerticalLine appearance="primary" actions={
                [
              {
                name: "Criar Entity",
                event: () => (console.log('teste'))
              }
                ]
            }>
              Muito bem, vamos lá
            </CardVerticalLine>
            <br/>
            <br/>
            <br/>
            <CardFloatHeader header={(
              <div style={{padding: "2em"}}>
                Está preparado ?
              </div>
            )}>
              <div style={{height: '100vh'}}>
                Oi
              </div>
            </CardFloatHeader>


          </React.Fragment>
        </ThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
