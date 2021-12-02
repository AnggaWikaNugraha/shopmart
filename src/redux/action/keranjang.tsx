import { ADD_CART } from "../reducer/keranjang";

export function addItem(item: { id: number, title: string, harga: number }) {
    console.log(item)
    return {
        type: ADD_CART,
        payload: item
    }

}