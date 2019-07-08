import React, { Component } from 'react';
import content from '../content/home.md';
import About from './about';
import Header from './header';
import Container from '@material-ui/core/Container';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <About />
        </Container>
      </React.Fragment>
    );
  }
}
