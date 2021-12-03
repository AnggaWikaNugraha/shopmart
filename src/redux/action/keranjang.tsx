import { ADD_CART } from "../reducer/keranjang";

export function addItem(item: { strMeal: string, strMealThumb: string, idMeal: string }) {
    return {
        type: ADD_CART,
        payload: item
    }

}