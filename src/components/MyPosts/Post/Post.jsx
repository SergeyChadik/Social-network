import React from 'react';
import classes from "./Post.module.css"


const Post = (props) => {
	return (
		<div className={classes.item}>
			<img src="https://cdn2.vectorstock.com/i/1000x1000/06/76/brown-hair-businesswoman-avatar-woman-face-profile-vector-21960676.jpg" alt='' />
			{props.message}
			<div>
				<span>{props.likes}</span>
			</div>
		</div>
	);
}


export default Post;