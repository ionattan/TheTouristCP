import React, { Component } from "react";

export default class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            console.log('Scrolling to Top');
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <div className="Scroll">
                { this.props.children }
            </div>
        )
    }
};