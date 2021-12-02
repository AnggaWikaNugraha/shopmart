import { ADD_CART } from "../reducer/keranjang";

export function addItem(item: { id: number, title: string, harga: number, weight: number }) {
    return {
        type: ADD_CART,
        payload: item
    }

}