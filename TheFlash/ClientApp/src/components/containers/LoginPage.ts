import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as AuthenticationActions from '../../actions/authentication-action';
import { StoreState } from '../../state';
import LoginPage, { LoginPageDispatchProps, LoginPageProps } from '../LoginPage';

const mapStateToProps = (state: StoreState): LoginPageProps  => {
  return {
      history: state.application.history
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AuthenticationActions.ActionTypes>): LoginPageDispatchProps  => {
  return {
    login: (userId: string) => dispatch(AuthenticationActions.login(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);