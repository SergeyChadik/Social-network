import React from 'react';
import classes from "./ProfileInfo.module.css"
import Preloader from "../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div>
				<img src='https://img2.fedpress.ru/thumbs/605x362/2019/06/1831/c308ad95b9582618dd723a7bd082fe64.jpg' />
			</div>
			<div className={classes.discriptionBlock}>
				<img src={props.profile.photos.large}/>
				<h3>{props.profile.fullName}</h3>
			</div>
		</div>
	);
}


export default ProfileInfo;