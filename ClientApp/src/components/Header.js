import React, { Component, PureComponent } from 'react';
import '../custom.css'

export class Header extends PureComponent {
    static displayName = Header.name;

    render() {
        return (
            <div>
                <h1 className="bender">Bender</h1>
            </div>
        );
    }
}
