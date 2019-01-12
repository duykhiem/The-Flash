import * as React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';

export interface LoginPageProps {
  history: Array<string>;
}

export interface LoginPageDispatchProps {
  login: (userId: string) => void;
}

export type Props = LoginPageProps & LoginPageDispatchProps;

const LoginPage = (props: Props) => {
  const onClickLogin = () => {
    props.login('admin');
    props.history.push('/home');
  };

  return (
    <div className="login-page-class">
      <Paper className="loginPaper">
        <div className="loginheaderpart">
          <Typography
            variant="display3"
            gutterBottom
            className="loginpageheader"
          >
            Login
          </Typography>
        </div>
        <Typography variant="headline" component="h3">
          Login to your account
        </Typography>
        <form>
          <div className="loginformgroup">
            <AccountCircle />

            <TextField id="input-username" label="Username" />
          </div>
          <div className="loginformgroup">
            <Key />
            <TextField type="password" id="input-password" label="Password" />
          </div>
        </form>
        <Button variant="contained" color="primary" onClick={onClickLogin}>
          <Typography variant="button" gutterBottom className="logintypography">
            Login
          </Typography>
        </Button>
      </Paper>
    </div>
  );
};

export default LoginPage;
