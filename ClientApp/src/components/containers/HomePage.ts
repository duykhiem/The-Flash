import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as ApplicationActions from '../../actions/application-action';
import { StoreState } from '../../state';
import HomePage, { HomePageDispatchProps, HomePageProps } from '../HomePage';

const mapStateToProps = (state: StoreState): HomePageProps  => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationActions.ActionTypes>): HomePageDispatchProps  => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);