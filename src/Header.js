import React, { Component, Fragment } from 'react';
import './Header.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Fragment>
          <div class="header">
            Home
            Blog
            Projects
            Work Experience
            Podcast
            Achievements
          </div>
        </Fragment> );
    }
}
 
export default Header;