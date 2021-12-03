export const GET_CATEGORIES = 'get_categories';
export const ERROR_GET_CATEGORIES = 'error_get_categories';
export const SET_CATEGORY = 'set_category';
export const ERROR_SET_CATEGORY = 'error_set_category';

type IAction = {
    type: string,
    payload?: any
}

const initialState: any = {
    data: [],
    category: ''
};

export default function reducer(state = initialState, action: IAction) {

    switch (action.type) {

        case GET_CATEGORIES:
            return { ...state, data: action?.payload };

        case ERROR_GET_CATEGORIES:
            return { ...state, data: [] };

        case SET_CATEGORY:
            return { ...state, category: action?.payload };

        case ERROR_SET_CATEGORY:
            return { ...state, category: '' };

        default:
            return state;

    }
}