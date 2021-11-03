import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = 'DELETE_POST'

let initialState = {
	postData: [
		{ id: 1, message: 'What happend?', likes: 'like: 54' },
		{ id: 2, message: 'Where my eggs?', likes: 'like: 15' }
	],
	profile: null,
	status: ''
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				likes: 0
			};
			return {
				...state,
				postData: [...state.postData, newPost],
				newPostText: ''
			};

		}

		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}
		case DELETE_POST: {
			return {...state, postData: state.postData.filter(p => p.id != action.postId)}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId)
		dispatch(setUserProfile(response.data));
}


export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId)
		dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status)
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status));
			}
}





	// if (action.type === ADD_POST) {
	// 	let newPost = {
	// 		id: 5,
	// 		message: state.newPostText,
	// 		likes: 0
	// 	};
	// 	state.postData.push(newPost);
	// 	state.newPostText = '';
	// } else if (action.type === UPDATE_NEW_POST_TEXT) {
	// 	state.newPostText = action.newText;

	// }

	// return state;
