import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lexusLogo from '../img/Lexus.svg';
import './HomeLoggedIn.scss';
import Cars from '../components/Cars';

class HomeLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'SEDAN',
    };
    this.content = this.content.bind(this);
  }

  content() {
    const { selection } = this.state;
    return (
      <Cars type={selection} />
    );
  }

  select(e) {
    const parent = e.target.parentElement;
    for (let i = 0; i < parent.children.length; i += 1) {
      parent.children[i].classList.remove('selection');
    }
    const item = e.target;
    item.classList.add('selection');
    if (item.innerHTML === 'SEDAN') {
      this.setState({
        selection: 'SEDAN',
      });
    } else if (item.innerHTML === 'SUV') {
      this.setState({
        selection: 'SUV',
      });
    } else if (item.innerHTML === 'COUPE') {
      this.setState({
        selection: 'COUPE',
      });
    } else if (item.innerHTML === 'HYBRID') {
      this.setState({
        selection: 'HYBRID',
      });
    } else if (item.innerHTML === 'TEST DRIVE') {
      this.setState({
        selection: 'TEST DRIVE',
      });
    } else if (item.innerHTML === 'APPOINTMENT') {
      this.setState({
        selection: 'APPOINTMENT',
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
                <li onClick={this.select.bind(this)} role="presentation" className="selection">SEDAN</li>
                <li onClick={this.select.bind(this)} role="presentation">SUV</li>
                <li onClick={this.select.bind(this)} role="presentation">COUPE</li>
                <li onClick={this.select.bind(this)} role="presentation">HYBRID</li>
                <li onClick={this.select.bind(this)} role="presentation">TEST DRIVE</li>
                <li onClick={this.select.bind(this)} role="presentation">APPOINTMENT</li>
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
        <div className="">{this.content()}</div>
      </div>
    );
  }
}

HomeLoggedIn.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default HomeLoggedIn;
