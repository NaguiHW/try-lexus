import React, { Component } from 'react';
import Login from './Login';
import Navbar from '../components/Navbar';
import HomeN from '../components/HomeN';
import Signup from './Signup';

class HomeNotConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'HOME',
      text1: 'LOG IN',
      text2: 'SIGN UP',
      classType: 'container bg-1',
    };
    this.renderPage = this.renderPage.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.showMenuClick = this.showMenuClick.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  createAccount() {
    this.setState({
      page: 'SIGN UP',
      text1: 'HOME',
      text2: 'LOG IN',
      classType: 'container bg-1',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  showMenuClick() {
    const navbar = document.getElementsByClassName('navbar');
    const line1 = document.getElementsByClassName('line-1');
    const line2 = document.getElementsByClassName('line-2');
    line1[0].classList.toggle('change-1');
    line2[0].classList.toggle('change-2');
    navbar[0].classList.toggle('move-left');
  }

  updatePage(e) {
    if (e.target.innerText === 'LOG IN') {
      this.setState({
        text1: 'HOME',
        text2: 'SIGN UP',
        classType: 'container bg-2',
      });
    }
    if (e.target.innerText === 'SIGN UP') {
      this.setState({
        text1: 'HOME',
        text2: 'LOG IN',
        classType: 'container bg-3',
      });
    }
    if (e.target.innerText === 'HOME') {
      this.setState({
        text1: 'LOG IN',
        text2: 'SIGN UP',
        classType: 'container bg-1',
      });
    }
    this.setState({
      page: e.target.innerText,
    });
    this.showMenuClick();
  }

  renderPage() {
    const { page } = this.state;
    if (page === 'LOG IN') {
      return (
        <Login />
      );
    }
    if (page === 'SIGN UP') {
      return (
        <Signup />
      );
    }
    return (
      <HomeN handleClick={this.createAccount} />
    );
  }

  render() {
    const { text1, text2, classType } = this.state;
    return (
      <div className={classType}>
        <Navbar
          text1={text1}
          text2={text2}
          clickHandler={this.updatePage}
          showMenu={this.showMenuClick}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default HomeNotConnected;
