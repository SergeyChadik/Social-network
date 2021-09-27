const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
	]
};


const dialogsReducer = (state = initialState, action) => {


	switch (action.type) {

		case SEND_MESSAGE: {
			let body = action.newMessageBody;
			return {
				...state,
				messagesData: [...state.messagesData, { id: 4, message: body }]
			};
		};
		default:
			return state;
	}
}


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })




// if (action.type === UPDATE_NEW_MESSAGE_BODY) {
// 	state.newMessageBody = action.body;

// } else if (action.type === SEND_MESSAGE) {
// 	let body = state.newMessageBody;
// 	state.newMessageBody = '';
// 	state.messagesData.push({ id: 4, message: body });
// }

// return state;

export default dialogsReducer;




// const dialogsReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case UPDATE_NEW_MESSAGE_BODY:
// 			state.newMessageBody = action.body;
// 			return state;
// 		case SEND_MESSAGE:
// 			let body = state.newMessageBody;
// 			state.newMessageBody = '';
// 			state.messagesData.push({ id: 4, message: body });
// 			return state;
// 		default:
// 			return state;
// 	}
// }