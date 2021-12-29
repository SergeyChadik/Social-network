import React from 'react';
import classes from "./ProfileInfo.module.css"
import Preloader from "../Common/Preloader/Preloader";
import ProfileStatus from '../Profile/ProfileStatus'
import ProfileStatusWithHooks from "../Profile/ProfileStatusWithHooks";


const Profileinfo = ({profile, status,updateStatus}) => {
	if (!profile) {
		return <Preloader />
	}
	return (
		<div>

			<div className={classes.discriptionBlock}>
				<img src={profile.photos.large}/>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

				<h3>{profile.fullName}</h3>
			</div>
		</div>
	);
}


export default Profileinfo;