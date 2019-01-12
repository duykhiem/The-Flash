import * as React from 'react';

export interface ProductsPageProps {

}

export interface ProductsPageDispatchProps {

}

export type Props = ProductsPageProps & ProductsPageDispatchProps;

const ProductsPage = (props: Props) => {
  return (
    <div>
      Products
    </div>
  );
};

export default ProductsPage;
