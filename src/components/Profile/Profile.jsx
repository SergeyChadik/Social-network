import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import Post from '../MyPosts/Post/Post';
import ProfileInfo from '../Profileinfo/Profileinfo';
import classes from "./Profile.module.css"


const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
			<MyPostsContainer/>
		</div>
	);
}


export default Profile;