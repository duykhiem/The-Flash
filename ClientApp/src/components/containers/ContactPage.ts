import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as ApplicationActions from '../../actions/application-action';
import { StoreState } from '../../state';
import NotificationType from '../../utils/notification-type';
import ContactPage, { ContactPageDispatchProps, ContactPageProps } from '../ContactPage';

const mapStateToProps = (state: StoreState): ContactPageProps  => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationActions.ActionTypes>): ContactPageDispatchProps  => {
  return {
      showNotification: (type: NotificationType, message: string) => dispatch(ApplicationActions.showNotification(type, message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);