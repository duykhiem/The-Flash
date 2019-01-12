import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as ApplicationActions from '../../actions/application-action';
import { StoreState } from '../../state';
import ManageAccountPage, {
    ManageAccountPageDispatchProps, ManageAccountPageProps
} from '../ManageAccountPage';

const mapStateToProps = (state: StoreState): ManageAccountPageProps  => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationActions.ActionTypes>): ManageAccountPageDispatchProps  => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAccountPage);