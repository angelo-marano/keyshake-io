import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { textAlign } from '@material-ui/system';

const styles = theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  topImageContainer: {
    margin: '0px !important',
    padding: '0px !important'
  },
  featureImage: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.4)
    ), url(https://res.cloudinary.com/keyshake-io/image/upload/v1562854178/black-and-white-dark-keys-792031_d3q2p0.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '550px',
    width: '100%'
  },
  overlay: {
    position: 'relative',
    top: '30%',
    margin: '0 auto',
    textAlign: 'center'
  },
  footer: {
    backgroundColor: theme.palette.primary,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  },
  aboutText: {
    color: '#FF8C00'
  }
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} className={classes.topImageContainer}>
        <main>
          <Paper className={classes.featureImage}>
            <div className={classes.overlay}>
              <Typography variant="h1">Keyshake</Typography>
              <Typography variant="h4">
                Technology Solutions. Done Better.
              </Typography>
            </div>
          </Paper>
        </main>
      </Container>
      <Container maxWidth="lg">
        <Typography variant="h5" className={classes.aboutText}>
          At Keyshake we are experts in software development and architecture.
          Our professionals have years of proven, real world experience
          utilizing the highest standards and best practices implementing
          technology in a variety of industries including healthcare, education,
          NGOs, sports management, telecommunications, entertainment,
          transportation, aerospace and defense.
        </Typography>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth={false}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Love you. Love everyone.
          </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default withStyles(styles)(About);
