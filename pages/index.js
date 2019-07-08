import React, { Component } from 'react';
import content from '../content/home.md';
import About from './about';
import Header from './header';
import Container from '@material-ui/core/Container';
import Head from 'next/head';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  status: {
    danger: orange[500]
  }
});

export default class Home extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <About />
        </Container>
      </ThemeProvider>
    );
  }
}
