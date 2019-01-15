import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as AuthenticationActions from '../../actions/authentication-action';
import { StoreState } from '../../state';
import Header, { HeaderDispatchProps, HeaderProps } from '../Header';

const mapStateToProps = (state: StoreState): HeaderProps  => {
  return {
      currentUser: state.authentication.currentUser
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AuthenticationActions.ActionTypes>): HeaderDispatchProps  => {
  return {
    logOut: () => dispatch(AuthenticationActions.logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);