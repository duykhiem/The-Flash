import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as ApplicationActions from '../../actions/application-action';
import { StoreState } from '../../state';
import ProductsPage, { ProductsPageDispatchProps, ProductsPageProps } from '../ProductsPage';

const mapStateToProps = (state: StoreState): ProductsPageProps  => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationActions.ActionTypes>): ProductsPageDispatchProps  => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);