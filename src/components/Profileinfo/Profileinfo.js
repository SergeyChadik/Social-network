import React from 'react';
import classes from "./ProfileInfo.module.css"
import Preloader from "../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../Profile/ProfileStatusWithHooks";
import userPhoto from  "../../images/user-profile.png";

const Profileinfo = ({profile, status,updateStatus,isOwner,savePhoto}) => {
	if (!profile) {
		return <Preloader />
	}


	const mainPhotoSelected = (e) => {

		if (e.target.files.length) {
			
			savePhoto(e.target.files[0])
		}
	}

	return (
		<div>

			<div className={classes.discriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
				{isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

				<h3>{profile.fullName}</h3>
			</div>
		</div>
	);
}


export default Profileinfo;