import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import * as ApplicationActions from '../../actions/application-action';
import * as AuthenticationActions from '../../actions/authentication-action';
import UserModel from '../../models/user-model';
import { StoreState } from '../../state';
import Styles from '../../styles/login-page-style';
import NotificationType from '../../utils/notification-type';
import LoginPage, { LoginPageDispatchProps, LoginPageProps } from '../LoginPage';

interface OwnProps extends WithStyles<typeof Styles> {
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps): LoginPageProps  => {
  return {
    classes: ownProps.classes,
    user: state.application.inputUser
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): LoginPageDispatchProps  => {
  return {
    setLoggedInUser: (user: UserModel) => dispatch(AuthenticationActions.setLoggedInUser(user)),
    setInputUser: (user: UserModel) => dispatch(ApplicationActions.setInputUser(user)),
    showNotification: (type: NotificationType, message: string) => dispatch(ApplicationActions.showNotification(type, message))
  };
};

export default withStyles(Styles)(connect(mapStateToProps, mapDispatchToProps)(LoginPage));