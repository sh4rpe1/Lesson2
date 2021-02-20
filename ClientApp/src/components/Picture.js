import React, { Component, PureComponent } from 'react';
import '../custom.css'

export class Picture extends PureComponent {
    static displayName = Picture.name;

  render () {
    return (
        <div>
            <br/>
            <img src="https://i.ytimg.com/vi/JwQY9GoLMvY/maxresdefault.jpg" alt="Фото Бендера" className="App-img" />
      </div>
    );
  }
}
