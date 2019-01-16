import ProductModel from '../models/product-model';

export const ADD_TO_CART = 'ADD_TO_CART';
export function addToCart(item: ProductModel) {
    return {
        type: ADD_TO_CART,
        item: item
    };
}

export const UPDATE_CART = 'UPDATE_CART';
export function updateCart(item: ProductModel) {
    return {
        type: UPDATE_CART,
        item: item
    };
}

export const REMOVE_ITEM = 'REMOVE_ITEM';
export function removeItem(item: ProductModel) {
    return {
        type: REMOVE_ITEM,
        item: item
    };
}

export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export function updateQuantity(item: ProductModel) {
    return {
        type: UPDATE_QUANTITY,
        item: item
    };
}