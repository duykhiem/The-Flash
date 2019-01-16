import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setProductList } from '../../actions/product-action';
import { StoreState } from '../../state';
import ProductsPage, { ProductsPageDispatchProps, ProductsPageProps } from '../ProductsPage';
import ProductModel from 'models/product-model';

const mapStateToProps = (state: StoreState): ProductsPageProps  => {
  return {
    items: state.product.items
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): ProductsPageDispatchProps  => {
  return {
    setProductList: (list: Array<ProductModel>) => dispatch(setProductList(list))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);