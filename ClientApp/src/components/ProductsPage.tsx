import * as React from 'react';
import ProductModel from '../models/product-model';
import ProductApi from '../apis/product-api';
import ProductList from '../components/ProductList';
import Cart from '../components/containers/Cart';
import NotificationType from '../utils/notification-type';

export interface ProductsPageProps {
  items: Array<ProductModel>;
}

export interface ProductsPageDispatchProps {
  setProductList: (productList: Array<ProductModel>) => void;
  showNotification: (type: NotificationType, message: string) => void;
}

export type Props = ProductsPageProps & ProductsPageDispatchProps;

class ProductsPage extends React.Component<Props> {
  
  async componentWillMount() {
    try {
      const productApi = new ProductApi();
      const products = await productApi.getAllProducts();
      this.props.setProductList(products);
      
    } catch (error) {
      this.props.showNotification(NotificationType.Error, 'Error !');
      console.log(error);
    }
  }

  render () {
    return (
      <div className="wrap">
        <ProductList items={this.props.items}/>
        {
          // @ts-ignore
          <Cart />
        }
        
    </div>
    );
  }
}

export default ProductsPage;
