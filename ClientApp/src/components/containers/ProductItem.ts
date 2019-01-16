import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addToCart } from '../../actions/cart-action';
import { syncQuantity } from '../../actions/product-action';

import ProductModel from '../../models/product-model';
import { StoreState } from '../../state';
import ProductItem, { ProductItemDispatchProps, ProductItemProps } from '../ProductItem';

interface OwnProps {
  item: ProductModel;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps): ProductItemProps  => {
  return {
      item: ownProps.item
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): ProductItemDispatchProps  => {
  return {
    addItemToCart: (item: ProductModel) => dispatch(addToCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);