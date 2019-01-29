import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import { WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import UserApi from '../apis/user-api';
import UserModel from '../models/user-model';
import Styles from '../styles/login-page-style';
import { history } from '../utils/history';
import NotificationType from '../utils/notification-type';

export interface LoginPageProps extends WithStyles<typeof Styles> {
  user: UserModel;
}

export interface LoginPageDispatchProps {
  setLoggedInUser: (user: UserModel) => void;
  setInputUser: (user: UserModel) => void;
  showNotification: (type: NotificationType, message: string) => void;
}

export type Props = LoginPageProps & LoginPageDispatchProps;

const LoginPage = (props: Props) => {

  const handleInputChange = (event) => {
    var inputUser = Object.assign({}, props.user);

    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    inputUser[event.target.name] = value;

    props.setInputUser(inputUser);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const userApi = new UserApi();
    try {
      const response = await userApi.login(props.user.Username, props.user.Password);
      // let loggedInUser = new UserModel();
      // loggedInUser.Username = props.user.Username,
      // loggedInUser.Token = response.data.access_token;
      var loggedInUser = response.data as UserModel;
      props.setLoggedInUser(loggedInUser);
      history.push('/');

    } catch (error) {
      props.showNotification(NotificationType.Error, 'Wrong username or password !');
      console.log(error);
    }
  };

  const { classes } = props;

  return (
    <div className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="userName">User Name</InputLabel>
            <Input id="userName" name="Username" autoFocus value={props.user.Username} onChange={handleInputChange} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" name="Password" type="password" value={props.user.Password} onChange={handleInputChange} />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                name="RememberMe"
                checked={props.user.RememberMe}
                value="RememberMe"
                onChange={handleInputChange}
                color="primary"
              />}
            label="Remember me"
          />
          <Button
            fullWidth
            onClick={onSubmit}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
