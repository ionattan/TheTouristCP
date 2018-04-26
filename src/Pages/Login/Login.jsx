import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export default class Login extends Component {
    state = {
        redirectToReferrer: false
    };

    logout(event) {
        event.preventDefault();
        this.props.auth.signout(this.redirect.bind(this));
    }

    login(event) {
        event.preventDefault();

        const login = {
            username: document.getElementsByName("username")[0].value,
            password: document.getElementsByName("password")[0].value
        };

        this.props.auth.authenticate(this.redirect.bind(this), login);
    };

    redirect() {
        this.setState({ redirectToReferrer: true });
    }

    renderLogin(from) {
        if (this.props.auth && this.props.auth.isLoggedIn) return;

        return (
            <form className="text-center">
                <h1>Hold On!</h1>
                <p>Please login to use this app.</p>
                <fieldset>
                    <input type="text" name="username" placeholder="admin" autoFocus />
                    <br />
                    <input type="password" name="password" placeholder="·········" />
                    <hr />
                    <button onClick={ this.login.bind(this) }>Log in</button>
                </fieldset>
            </form>
        )
    }

    renderLogout() {
        if (!this.props.auth || !this.props.auth.isLoggedIn) return;

        return (
            <form className="text-center">
                <h1>Hold On!</h1>
                <p>Are you sure you want to exit?</p>
                <fieldset>
                    <button onClick={ this.logout.bind(this) }>
                        Logout
                    </button>
                </fieldset>
            </form>
        )
    }

    renderRedirect(from) {
        if (this.state.redirectToReferrer === false) return;

        return (
            <Redirect to={from} />
        )
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };

        return (
            <section>
                { this.renderLogin(from) }
                { this.renderLogout() }
                { this.renderRedirect(from) }
            </section>
        )
    }
}
