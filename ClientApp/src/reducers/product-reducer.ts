import ProductModel from '../models/product-model';
import { InitialState } from '../state';

export default function productReducer(
    state: any = InitialState.product,
    action: any) {
    switch (action.type) {
        case 'SET_PRODUCT_LIST': {
            return {
                ...state,
                items: action.list
            };
        }
        default:
            return state;
    }
}