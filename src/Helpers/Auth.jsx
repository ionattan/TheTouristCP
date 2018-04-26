import { Component } from 'react';

export default class Auth extends Component {
    user = null;
    isLoggedIn = false;

    init(users) {
        this.users = users;
    }

    authenticate(callback, data) {
        if (this.users[data.username] && this.users[data.username].password === data.password) {
            this.isLoggedIn = true;
            this.user = this.users[data.username];

            setTimeout(() => {
                callback(this.user);
            }, 2000);
        }
    }

    signout(callback) {
        this.isLoggedIn = false;
        this.username = null;

        setTimeout(callback, 2000);
    }
}
