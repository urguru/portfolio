import React, { Component, Fragment } from 'react';
import Header from './Header';
import HomeContent from './HomeContent';
import Footer from './Footer'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Fragment>
            <Header />
            <HomeContent />
            <Footer />
        </Fragment>);
    }
}

export default Home;