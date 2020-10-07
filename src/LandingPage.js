import React, { Component, Fragment } from 'react';
import SocialMedia from './SocialMedia'
import './LandingPage.css'

const introduction = [
  "Hey there...",
  "I am Guruprasad Veerannavaru...",
  "I love solving challenging problems and building cool stuff...",
  "Connect with me ..."
]

class LandingPage extends Component {
  state = {
    level: 0,
    presented: "",
    animationOver: false,
  }

  componentDidMount() {
    const id = setInterval(() => {
      const len = this.state.presented.length;
      if (len === introduction[this.state.level].length) {
        if (this.state.level === introduction.length - 1) {
          this.setState({
            animationOver: true
          })
          clearInterval(id)
        } else {
          this.setState({
            presented: "",
            level: this.state.level + 1
          })
        }
      }
      else {
        this.setState({
          presented: introduction[this.state.level].substr(0, len + 1)
        });
      }
    }, 150)
  }



  render() {
    return (
      <div class="landingPage">
        <h1>{this.state.presented}</h1>
        {this.state.animationOver ?
          <Fragment>
            <div class="socialMedia">
              <SocialMedia />
            </div>
          </Fragment>
          :
          <Fragment />}
      </div>
    );
  }
}

export default LandingPage;
