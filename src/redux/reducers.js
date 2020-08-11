import {
    FETCH_USERS_REQUEST,
    FETCH_USER_REQUEST,
    FETCH_USERS_FAILURE,
    FETCH_USER_FAILURE,
    FETCH_USERS_SUCCESS,
    FETCH_USER_SUCCESS
} from './actions';

const initialState = {
    users: null,
    user: null,
    error: "",
    loadingUsers: '',
    loadingUser: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loadingUsers: true
            }
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loadingUser: true
            }

        case FETCH_USERS_SUCCESS: return {
            ...state,
            loadingUsers: false,
            users: action.payload,
            user: null,
        }

        case FETCH_USER_SUCCESS: return {
            ...state,
            loadingUser: false,
            users: state.users,
            user: action.payload,
        }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loadingUsers: false,
                error: action.payload
            }

        case FETCH_USER_FAILURE:
            return {
                ...state,
                loadingUser: false,
                error: action.payload
            }

        default: return state
    }
};

export default reducer;