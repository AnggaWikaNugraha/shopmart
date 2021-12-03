export const ADD_CART = 'add_cart';

type IAction = {
    type: string,
    payload?: any
}

const initialState: any = [];

export default function reducer(state = initialState, action: IAction) {

    switch (action.type) {

        case ADD_CART:
            if (state.find((item: any) => item.idMeal === action.payload.idMeal)) {

                return state.map((item: any) => ({
                    ...item,
                    qty: item.idMeal === action.payload.idMeal ? item.qty + 1 : item.qty

                }));

            } else {

                return [...state, { ...action.payload, qty: 1 }];

            }


        default:
            return state;

    }
}