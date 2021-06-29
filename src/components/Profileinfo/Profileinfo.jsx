import React from 'react';
import classes from "./ProfileInfo.module.css"


const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src='https://img2.fedpress.ru/thumbs/605x362/2019/06/1831/c308ad95b9582618dd723a7bd082fe64.jpg' />
			</div>
			<div className={classes.discriptionBlock}>
				<h3>ava + despton</h3>
			</div>
		</div>
	);
}


export default ProfileInfo;