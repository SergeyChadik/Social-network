import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import Post from '../MyPosts/Post/Post';
import Profileinfo from '../Profileinfo/Profileinfo';
import classes from "./Profile.module.css"
import {saveProfile} from "../../redux/profile-reducer";


const Profile = (props) => {
	return (
		<div>
			<Profileinfo savePhoto={props.savePhoto}
						 isOwner={props.isOwner}
						 profile={props.profile}
						 status={props.status}
						 saveProfile={props.saveProfile}
						 updateStatus={props.updateStatus}/>
			<MyPostsContainer/>
		</div>
	);
}


export default Profile;