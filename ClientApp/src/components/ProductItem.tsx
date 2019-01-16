import * as React from 'react';

import ProductModel from '../models/product-model';
import AddToCartButton from './AddToCartButton';

export interface ProductItemProps {
    item: ProductModel;
}

export interface ProductItemDispatchProps {
    addItemToCart: (item: ProductModel) => void;
}

export type Props = ProductItemProps & ProductItemDispatchProps;

const ProductItem = (props: Props) => {

    const addItemToCart = () => {

        let item = Object.assign({}, props.item);
        item.Quantity = 1;
        props.addItemToCart(item);
    };

    return (
        <div className="item-wrapper">
            <div className="item-container">
                <div className="product-img">
                    <img src={props.item.ImageUrl} alt={props.item.Name} />
                </div>
                <div className="product-details">
                    <div className="brand-name">
                        {props.item.Brand}
                    </div>
                    <div className="product-name">
                        {props.item.Name}
                    </div>
                    <div className="package-detail">
                        {props.item.Detail}
                    </div>
                    <div className="product-price">
                        {props.item.Price} USD
                    </div>
                    <AddToCartButton onClick={() => addItemToCart()} />
                </div>
            </div>
        </div>
    );
};

export default ProductItem;