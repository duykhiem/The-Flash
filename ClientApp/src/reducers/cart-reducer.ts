import { InitialState } from '../state';
import ProductModel from '../models/product-model';

export default function cartReducer(
    state: any = InitialState.cart,
    action: any) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            // TODO: Refactor
            var items;
            if ( state.items.filter(i => i.Name === action.item.Name).length > 0 ) {
                items = Object.assign([], state.items);
                items.filter(thisItem => thisItem.Name === action.item.Name)[0].Quantity += 1 ;
            } else {
                items = state.items.concat(action.item);
            }
            return {
                ...state, 
                items: items
            };       
        }
        case 'UPDATE_CART': {
            return state.items.map((item, index) => {
                if (index !== action.index) {
                    return item;
                }

                return {
                    ...state,
                    ...action.item
                };
            });
        }
        case 'REMOVE_ITEM': {
            const itemIndex = state.items.findIndex(i => i.Name === action.item.Name);
            var itemList = state.items.filter((item, index) => index !== itemIndex);
            return {
                ...state, 
                items: itemList
            };    
        }
        default:
            return state;
    }
}