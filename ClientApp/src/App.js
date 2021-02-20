import React, { Component, PureComponent } from 'react';
import { Header } from './components/Header';
import { Picture } from './components/Picture';
import { MainPart } from './components/MainPart';

import './custom.css'

export default class App extends PureComponent {
    static displayName = "Урок 2";
  
  render () {
      return (
          <div className="App">
              <Header className="App-hdr" />
              <div className="app-body">
                  <Picture className="App-picture" />
                  <MainPart className="App-main" />
              </div>
         </div>
    );
    }
/*        <Picture />
        <Description />
        */
}
