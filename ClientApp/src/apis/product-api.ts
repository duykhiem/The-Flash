import axios, { AxiosRequestConfig } from 'axios';
import ProductModel from '../models/product-model';
import Store from '../store/configureStore';
import { history } from '../utils/history';
const qs = require('qs');

class ProductApi {

    getAllProducts = async () => {

        var respose = await axios.get('https://api.myjson.com/bins/y5flw');
        return respose.data as Array<ProductModel>;

        // const url = 'http://commerceserviceapi/episerverapi/commerce/entries/1/10';
        // const token = Store.getState().authentication.currentUser.Token;
        // var requestConfig: AxiosRequestConfig = {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Authorization': 'Bearer ' + token
        //     }
        // };

        // var respose = await axios.get(url, qs.stringify(requestConfig));
        // return respose.data.EntryResults.map((item: any, index: number) => {
        //     return this.transformData(item);
        // });
    }

    // transformData = (product: any) => {
        
    // }
}

export default ProductApi;