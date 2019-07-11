import React, { Component } from 'react';
import About from './about';
import Header from './header';
import Container from '@material-ui/core/Container';
import Head from 'next/head';
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <About />
      </React.Fragment>
    );
  }
}
