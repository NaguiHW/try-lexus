import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lexusLogo from '../img/Lexus.svg';
import Cars from '../components/Cars';
import Car from '../components/Car';
import AppointmentForm from '../components/AppointmentForm';
import Appointments from './Appointments';
import './HomeConnected.scss';

class HomeConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'SEDAN',
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.makeAppointment = this.makeAppointment.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
    this.removeClassTo = this.removeClassTo.bind(this);
    this.addClassTo = this.addClassTo.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  removeClassTo() {
    const menuList = document.getElementsByClassName('menu-list')[0];
    for (let i = 0; i < menuList.children.length; i += 1) {
      menuList.children[i].classList.remove('selection');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  addClassTo(item) {
    item.classList.add('selection');
  }

  clickHandler(e) {
    this.setState({
      selection: e.target.parentElement.id,
    });
  }

  makeAppointment(e) {
    this.setState({
      selection: e.target.id,
    });
    this.removeClassTo();
  }

  updateSelection() {
    this.setState({
      selection: 'APPOINTMENTS',
    });
    this.removeClassTo();
    this.addClassTo(document.getElementById('appointments'));
  }

  content() {
    const { selection } = this.state;
    if (parseInt(selection, 10)) {
      return (
        <Car id={selection} handleClick={this.makeAppointment} />
      );
    }
    if (selection === 'CREATE-APPONITMETNT') {
      return (
        <AppointmentForm handleClick={this.updateSelection} />
      );
    }
    if (selection === 'APPOINTMENTS') {
      return (
        <Appointments />
      );
    }
    return (
      <Cars type={selection} handleClick={this.clickHandler} />
    );
  }

  select(e) {
    this.removeClassTo();
    const item = e.target;
    this.addClassTo(item);
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
    } else if (item.innerHTML === 'APPOINTMENTS') {
      this.setState({
        selection: 'APPOINTMENTS',
      });
    }
  }

  render() {
    const { handleClick } = this.props;
    return (
      <div className="container-4">
        <div className="side-menu">
          <div className="logo">
            <img src={lexusLogo} alt="Lexus" />
          </div>
          <div className="menu">
            <nav>
              <ul className="menu-list">
                <li onClick={this.select.bind(this)} role="presentation" className="selection">SEDAN</li>
                <li onClick={this.select.bind(this)} role="presentation">SUV</li>
                <li onClick={this.select.bind(this)} role="presentation">COUPE</li>
                <li onClick={this.select.bind(this)} role="presentation">HYBRID</li>
                <li onClick={this.select.bind(this)} role="presentation" id="appointments">APPOINTMENTS</li>
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
            <button type="button" onClick={handleClick}>Log Out</button>
          </div>
        </div>
        <div className="">{this.content()}</div>
      </div>
    );
  }
}

HomeConnected.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default HomeConnected;
