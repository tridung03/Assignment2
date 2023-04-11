import instance from ".";
import { IProduct, updateForm } from "../models";

export const getAll = () => {
    const url = "/api/products";
    return instance.get(url);
}

export const getProductById = (id: number | string) => {
    const url = "/api/products/" + id;
    return instance.get(url);
}
export const deleteProduct = (id: number | string) => {
    const url = "/api/products/" + id;
    return instance.delete(url);
}
export const updateProduct = (id: number | string, value: IProduct) => {
    const url = "/api/products/" + id;
    return instance.patch(url, value);
}
export const addProduct = (body: IProduct) => {
    const url = "/api/products";
    return instance.post(url, body);
}



