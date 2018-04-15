import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Menu.css';

export default class Menu extends Component {
  renderUserMenu() {
    return (
      <strong>{ this.props.auth.user.name}</strong>
    )
  }

  renderLink(link) {
    if (link.hidden === false && this.props.auth.isLoggedIn === true) return;
    if (link.hidden === true && this.props.auth.isLoggedIn !== true) return;

    return (
      <NavLink key={ link.url } to={ link.url }>
        { link.title }
      </NavLink>
    )
  }

  render() {
    return (
      <div className={ `Menu Menu${ this.props.type}`}>
        { this.props.children }
        <nav>
          { this.props.links.map(this.renderLink.bind(this)) }
          { this.props.auth.isLoggedIn && this.renderUserMenu() }
        </nav>
      </div>
    );
  }
}
