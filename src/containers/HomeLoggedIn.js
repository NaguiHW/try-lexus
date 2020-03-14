import React, { Component } from 'react';
import lexusLogo from '../img/Lexus.svg';
import './HomeLoggedIn.scss';
import Sedan from '../components/Sedans';
import All from '../components/All';

class HomeLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'SEDANS',
    };
    this.content = this.content.bind(this);
  }

  content() {
    if (this.state.selection === 'SEDANS') {
      return (
        <Sedan />
      );
    } if (this.state.selection === 'SUVS') {
      return (
        <All />
      );
    }
  }

  select(e) {
    const parent = e.target.parentElement;
    for (let i = 0; i < parent.children.length; i += 1) {
      parent.children[i].classList.remove('selection');
    }
    const item = e.target;
    const content = document.getElementsByClassName('content')[0];
    item.classList.add('selection');
    if (item.innerHTML === 'SEDANS') {
      this.setState({
        selection: 'SEDANS',
      });
    } else if (item.innerHTML === 'SUVS') {
      this.setState({
        selection: 'SUVS',
      });
    } else if (item.innerHTML === 'COUPES') {
      this.setState({
        selection: 'COUPES',
      });
    } else if (item.innerHTML === 'HYBRIDS') {
      this.setState({
        selection: 'HYBRIDS',
      });
    } else if (item.innerHTML === 'TEST DRIVES') {
      this.setState({
        selection: 'TEST DRIVES',
      });
    } else if (item.innerHTML === 'APPOINTMENTS') {
      this.setState({
        selection: 'APPOINTMENTS',
      });
    }
  }

  render() {
    const { logout } = this.props;
    return (
      <div className="container-4">
        <div className="side-menu">
          <div className="logo">
            <img src={lexusLogo} alt="Lexus" />
          </div>
          <div className="menu">
            <nav>
              <ul>
                <li onClick={this.select.bind(this)} role="presentation" className="selection">SEDANS</li>
                <li onClick={this.select.bind(this)} role="presentation">SUVS</li>
                <li onClick={this.select.bind(this)} role="presentation">COUPES</li>
                <li onClick={this.select.bind(this)} role="presentation">HYBRIDS</li>
                <li onClick={this.select.bind(this)} role="presentation">TEST DRIVES</li>
                <li onClick={this.select.bind(this)} role="presentation">APPOINTMENTS</li>
              </ul>
            </nav>
          </div>
          <div className="social-media">
            <div className="icons">
              <i className="fab fa-twitter" />
              <i className="fab fa-facebook-f" />
              <i className="fab fa-google-plus-g" />
              <i className="fab fa-pinterest-p" />
            </div>
            <button type="button" onClick={() => logout()}>Log Out</button>
          </div>
        </div>
        <div className="content">{this.content()}</div>
      </div>
    );
  }
}

export default HomeLoggedIn;
