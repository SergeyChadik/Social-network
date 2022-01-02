import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import Post from '../MyPosts/Post/Post';
import Profileinfo from '../Profileinfo/Profileinfo';
import classes from "./Profile.module.css"


const Profile = (props) => {
	return (
		<div>
			<Profileinfo savePhoto={props.savePhoto}
						 isOwner={props.isOwner}
						 profile={props.profile}
						 status={props.status}
						 updateStatus={props.updateStatus}/>
			<MyPostsContainer/>
		</div>
	);
}


export default Profile;