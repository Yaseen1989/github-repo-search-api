import {t} from './actions';

const initState = {
    data: null
};

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case t.LOAD_REPO_DATA_SUCCESS:
            return {
                ...state,
                repo: action.data
            };
        case t.RESET_REPO_DATA:
            return {
                repo: {
                    items: []
                }
            };

        default:
            return state;
    }
};