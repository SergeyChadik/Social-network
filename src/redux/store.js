import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sitebarReducer } from "./sitebar-reducer";




let store = {
	_state: {
		profilePage: {
			postData: [
				{ id: 1, message: 'What happend?', likes: 'like: 54' },
				{ id: 2, message: 'Where my eggs?', likes: 'like: 15' }
			],
			newPostText: 'Comarad'
		},

		messagesPage: {
			dialogsData: [
				{ id: 1, name: 'Apostol Petr' },
				{ id: 2, name: 'Mark Fevroniy' },
				{ id: 3, name: 'August' },
				{ id: 4, name: 'Spartak' }
			],
			messagesData: [
				{ id: 1, message: 'Good' },
				{ id: 2, message: 'Supper' },
				{ id: 3, message: 'Quate' }
			],
			newMessageBody: ""
		},
		sitebar: {}
	},


    _callSubscriber() {
		console.log('ttt');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
		this._state.sitebar = sitebarReducer(this._state.sitebar, action);

		this._callSubscriber(this._state);

	}
}


export default store;

window.state = store;
