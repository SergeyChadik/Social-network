import loading from "../../../images/05.gif";
import React from "react";
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div>
       {/*<img src={loading}/>*/}
        <div className={s.wrapper}>
            <div className={s.spinner}></div>
        </div>
    </div>
}

export default Preloader;