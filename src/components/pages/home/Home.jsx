import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <Sidebar />
                    <div id="content">
                        <Header />
                    </div>
                </div>
            </div>
        )
    }
}
