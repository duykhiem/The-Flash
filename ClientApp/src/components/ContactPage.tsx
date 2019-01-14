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
    <div className="contact-page-wrapper">
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
          <Paper className="contact-page-paper">
            <Typography variant="display1" gutterBottom style={{ padding: 15 }}>
              Contact us
            </Typography>
            <Grid container spacing={24} >
              <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                <TextField
                  id="Firstname"
                  label="First Name"
                  placeholder="First Name"
                  className="contact-page-name-list-field"
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                <TextField
                  id="LastName"
                  label="LastName"
                  placeholder="Last Name"
                  className="contact-page-name-list-field"
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                <TextField
                  id="Firstname"
                  label="Email"
                  placeholder="Email address"
                  className="contact-page-name-list-field"
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                <TextField
                  id="Firstname"
                  label="Location"
                  placeholder="Location"
                  className="contact-page-name-list-field"
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
                <TextField
                  id="Firstname"
                  label="Message"
                  multiline
                  rows="2"
                  placeholder="Message"
                  className="contact-page-name-list-field"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
                <Button type="button" color="primary" variant="contained" onClick={onSubmit}>Send</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
