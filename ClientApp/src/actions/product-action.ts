import ProductModel from '../models/product-model';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_FULFILLED = 'FETCH_ITEMS_FULFILLED';
export const FETCH_ITMS_REJECTED = 'FETCH_ITMS_REJECTED';

export const SYNC_QUANTITY = 'SYNC_QUANTITY';
export function syncQuantity(item: ProductModel) {
    return {
        type: SYNC_QUANTITY,
        item: item
    };
}

export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export function setProductList(list: Array<ProductModel>) {
    return {
        type: SET_PRODUCT_LIST,
        list: list
    };
}
