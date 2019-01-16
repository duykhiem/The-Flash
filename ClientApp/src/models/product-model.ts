import Product from '../interfaces/product';

export default class ProductModel implements Product {
    Name: string;
    Quantity: number;
    Price: number;
    Brand: string;
    Detail: string;
    ImageUrl: string;
}