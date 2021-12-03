export const GET_MEALS = 'get_meals';
export const ERROR_GET_MEALS = 'error_get_meals';

type IAction = {
    type: string,
    payload?: any
}

const initialState: any = {
    data: [],
};

export default function reducer(state = initialState, action: IAction) {

    switch (action.type) {

        case GET_MEALS:
            return { ...state, data: action?.payload };

        case ERROR_GET_MEALS:
            return { ...state, data: [] };

        default:
            return state;

    }
}