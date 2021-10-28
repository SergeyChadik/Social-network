import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form"
import {getAuthUserData} from "./auth-reducer";

const INITIALAZED_SUCCESS = "INITIALAZED_SUCCESS";
const UNFOLLOW = "UNFOLLOW";


export let initialState = {
    initialized: false,


};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALAZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALAZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    debugger
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    });

}