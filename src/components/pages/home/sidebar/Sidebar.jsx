import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Sell Pro</h3>
                </div>

                <ul className="list-unstyled components" >
                    <p>Sidebar heading</p>
                    <li className="active" >
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" > Home</a >
                        <ul className="collapse list-unstyled" id="homeSubmenu" >
                            <li>
                                <a >Home 1</a>
                            </li>
                            <li>
                                <a >Home 2</a>
                            </li>
                            <li>
                                <a >Home 3</a>
                            </li>
                        </ul >
                    </li >
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu" >
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul >
                    </li >
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul >

                <ul className="list-unstyled CTAs" >
                    <li>
                        <a className="download">SellproTeam</a>
                    </li >
                    <li>
                        <a className="article">Details</a>
                    </li >
                </ul >
            </nav >
        )
    }
}
