import { getCategories } from "../../api/categories";
import { GET_CATEGORIES, ERROR_GET_CATEGORIES, SET_CATEGORY } from "../reducer/categories";

export const actCategories = () => {
    return async (dispacth: any, getState: any) => {

        await getCategories().then(res => {
            if (res.status !== 200) {
                alert('error')
                dispacth({
                    type: ERROR_GET_CATEGORIES,
                })
            } else {
                dispacth({
                    type: GET_CATEGORIES,
                    payload: res.data.categories
                })
            }
        }).catch(er => alert(er))

    }
}

export const actSetCategory = (item: string) => {
    return async (dispacth: any, getState: any) => {

        dispacth({
            type: SET_CATEGORY,
            payload: item
        })

    }
}