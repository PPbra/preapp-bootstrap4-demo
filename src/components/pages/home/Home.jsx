import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <Sidebar />
                    <div id="content">
                        <Header />
                    </div>
                </div>
            </div >
        )
    }
}
