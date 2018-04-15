import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <section>
        <h1>ERROR 404!</h1>
        <p>
          Page not found: <strong>{ this.props.location.pathname }</strong>
        </p>
        <p>You'll be redirected to the home page in a while.</p>
      </section>
    );
  }
}
