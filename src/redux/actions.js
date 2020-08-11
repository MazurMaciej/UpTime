import axios from 'axios';

const APILink = 'https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients/'

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
};
export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
};

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};
export const fetchUserSuccess = user => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
};

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
};
export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
};


export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersRequest())
        axios.get(APILink)
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
};

export const fetchUser = (id) => {
    return dispatch => {
        dispatch(fetchUserRequest())
        axios.get(`${APILink}${id}`)
            .then(response => {
                const user = response.data
                dispatch(fetchUserSuccess(user))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }
};

