import { InitialState } from '../state';
import ProductModel from '../models/product-model';

export default function cartReducer(
    state: Array<ProductModel> = InitialState.cart,
    action: any) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            state.map(thisItem => {
                if (thisItem.Name === action.item.Name) {
                    if (!thisItem.Quantity) {
                        thisItem.Quantity = 0;
                    }
                    thisItem.Quantity += action.item.Quantity;
                }
            });
            return [
                ...state, action.item
            ];
            break;
        }
        case 'UPDATE_CART': {
            return state.map((item, index) => {
                if (index !== action.index) {
                    return item;
                }

                return [
                    ...state,
                    ...action.item
                ];
            });
        }
        case 'REMOVE_ITEM': {
            const itemIndex = state.findIndex(i => i.Name === action.item.Name);
            return state.filter((item, index) => index !== itemIndex);
        }
        default:
            return state;
    }
}