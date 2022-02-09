import React from 'react';
import classes from "./MyPosts.module.css"
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validation/validator";
import {Textarea} from "../Common/FormsControls/FormsControls";





const MyPosts = React.memo(props => {


	let postElement =
		props.posts.map(p => <Post key={p.id} message={p.message} likes={p.likes} />)

	let newPostElement = React.createRef();

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}


	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostForm onSubmit={onAddPost}/>
			<div className={classes.item}>
				{postElement}
			</div>
		</div>
	);
});

const maxLength10 = maxLengthCreator(10)


let AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name='newPostText'
					   component={Textarea}
					   validate={[required, maxLength10]}
				/>
			</div>
			<button>Add post</button>
			<button>Remove</button>
		</form>
	)
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;