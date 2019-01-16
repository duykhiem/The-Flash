import axios, { AxiosRequestConfig } from 'axios';
import ProductModel from '../models/product-model';

class ProductApi {

    getAllProducts = async () => {

        const url = '/users/authenticate';

        // var requestConfig: AxiosRequestConfig = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NDc0OTg5MjEsImV4cCI6MTU0ODEwMzcyMSwiaWF0IjoxNTQ3NDk4OTIxfQ.YgqLVmzIktMXRb9rw9CUTrzr-myqah8b3bP6OBbU3kg' 
        //     }
        // };
        var respose = await axios.get('https://api.myjson.com/bins/y5flw');
        return respose.data as Array<ProductModel>;
    }
}

export default ProductApi;