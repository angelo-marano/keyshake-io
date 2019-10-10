import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import content from "../content/home.md";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  topImageContainer: {
    margin: "0 20px 0 0",
    padding: "0px !important"
  },

  title: {
    position: "relative",
    top: "2%",
    left: "2%",
    textAlign: "left"
  },
  slogan: {
    position: "relative",
    top: "3%",
    left: "2%",
    textAlign: "left"
  },
  featureImage: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.4)
    ), url(https://res.cloudinary.com/keyshake-io/image/upload/v1562854178/black-and-white-dark-keys-792031_d3q2p0.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "400px",
    width: "100%"
  },
  overlay: {
    position: "relative",
    top: "30%",
    margin: "0 auto",
    textAlign: "center"
  },
  footer: {
    backgroundColor: theme.palette.primary,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  },
  aboutText: {
    textAlign: "center",
    marginBottom: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  divider: {
    marginBottom: "10px",
    marginTop: "10px"
  }
});

function About(props) {
  const { classes } = props;
  const {
    attributes: { slogan, about, team }
  } = content;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} className={classes.topImageContainer}>
        <main>
          <Paper className={classes.featureImage}>
            <Typography variant="h2" className={classes.title}>
              Keyshake
            </Typography>
            <Typography className={classes.slogan} variant="h5">
              {slogan}
            </Typography>
          </Paper>
        </main>
      </Container>
      <Container maxWidth="md">
        <Typography variant="h3" className={classes.aboutText}>
          About Us
        </Typography>
        <Typography variant="body1" className={classes.aboutText}>
          {about}
        </Typography>
      </Container>
      <Divider className={classes.divider} variant="middle" />
      <Container maxWidth="md">
        <Typography variant="h3">Team</Typography>
        {team.map(x => {
          return (
            <React.Fragment>
              <Typography>{x.name}</Typography>
              <Typography>{x.title}</Typography>
            </React.Fragment>
          );
        })}
      </Container>

      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth={false} />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default withStyles(styles)(About);
