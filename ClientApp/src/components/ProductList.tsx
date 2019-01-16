import * as React from 'react';
import ProductModel from '../models/product-model';
import ProductItem from '../components/containers/ProductItem';

interface Props {
    items: Array<ProductModel>;
}

class ProductsPage extends React.Component<Props> {
  
  render () {
    return (
      <div className="item-catalog">
        {
          this.props.items && this.props.items.map((item, i) => (
            // @ts-ignore
            <ProductItem item={item} key={i} />
          ))
        }
      </div>
    );
  }
}

export default ProductsPage;
