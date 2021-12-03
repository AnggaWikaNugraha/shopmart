import { byCategory } from "../../api/categories";
import { ERROR_GET_MEALS, GET_MEALS } from "../reducer/meal";

export const actMeals = (item: string) => {
    return async (dispacth: any, getState: any) => {

        await byCategory(item).then(res => {
            if (res.status !== 200) {
                alert('error')
                dispacth({
                    type: ERROR_GET_MEALS,
                })
            } else {
                dispacth({
                    type: GET_MEALS,
                    payload: res.data.meals
                })
            }
        }).catch(er => {
            alert(er)
            dispacth({
                type: ERROR_GET_MEALS,
            })
        })

    }
}
