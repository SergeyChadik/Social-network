const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
	postData: [
		{ id: 1, message: 'What happend?', likes: 'like: 54' },
		{ id: 2, message: 'Where my eggs?', likes: 'like: 15' }
	],
	newPostText: 'Comarad',
	profile: null
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likes: 0
			};
			return {
				...state,
				postData: [...state.postData, newPost],
				newPostText: ''
			};

		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			};
		}
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })


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
