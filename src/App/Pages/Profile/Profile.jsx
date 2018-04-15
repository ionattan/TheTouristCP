import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    let user = this.props.auth.user;

    return (
      <section>
        <img src={ user.image } alt={ user.name } />
        <h1>{ user.name }</h1>
        <p>Level: { user.level }</p>
      </section>
    );
  }
}
