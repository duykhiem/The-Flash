import * as React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import NotificationType from '../utils/notification-type';

export interface ContactPageProps {

}

export interface ContactPageDispatchProps {
  showNotification: (type: NotificationType, message: string) => void;
}

export type Props = ContactPageProps & ContactPageDispatchProps;

const ContactPage = (props: Props) => {

  const onSubmit = () => {
    props.showNotification(NotificationType.Success, 'The form was submitted successfully.');
  };

  return (
    <Paper className="contact-page-paper">
      <Grid container spacing={24} justify="center">
        <Grid item xs={10}>
            <Grid container spacing={24} >
              <Grid item xs={12} lg={6} md={6}>
                <Typography variant="h4" gutterBottom>
                  Contact us
                </Typography>
                <TextField
                  id="Firstname"
                  label="First Name"
                  placeholder="First Name"
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} lg={6} md={6}>
                <TextField
                  id="LastName"
                  label="LastName"
                  placeholder="Last Name"
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} lg={6} md={6}>
                <TextField
                  id="Firstname"
                  label="Email"
                  placeholder="Email address"
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} lg={6} md={6}>
                <TextField
                  id="Firstname"
                  label="Location"
                  placeholder="Location"
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} lg={12} md={12}>
                <TextField
                  id="Firstname"
                  label="Message"
                  multiline
                  rows="2"
                  placeholder="Message"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} lg={12} md={12}>
                <Button type="button" color="primary" variant="contained" onClick={onSubmit}>Send</Button>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactPage;
