import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import Redirect from "react-router-dom/es/Redirect";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validation/validator";




const Dialogs = (props) => {

	let state = props.messagesPage;

	let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

	let messagesElement = state.messagesData.map(m => <Message message={m.message} key={m.id} />);
	let newMessageBody = state.newMessageBody;



	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	if (!props.isAuth == false) return <Redirect to='/login'/>;

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}

			</div>
			<div className={classes.messages}>
				<div>{messagesElement}</div>
				<AddMessageForm onSubmit={addNewMessage}/>
			</div>
		</div>
	)
}
const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea}
					   name='newMessageBody'
					   validate={[required, maxLength50]}
					   placeholder='Enter your message' />
			</div>
			<div><button>Send</button></div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs