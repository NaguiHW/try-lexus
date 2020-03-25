import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Car from './Car';
import Cars from './Cars';
import AppointmentForm from './AppointmentForm';
import Appointments from './Appointments';
import SideMenu from '../components/SideMenu';

class HomeConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'SEDAN',
    };
    this.select = this.select.bind(this);
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
    const { logOutAction } = this.props;
    return (
      <div className="container-4">
        <SideMenu handleSelection={this.select} handleClick={logOutAction} />
        <div className="">{this.content()}</div>
      </div>
    );
  }
}

HomeConnected.propTypes = {
  logOutAction: PropTypes.func.isRequired,
};

export default HomeConnected;
