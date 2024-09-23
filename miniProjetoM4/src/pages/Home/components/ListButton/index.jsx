import React from "react";
import style from "./style.module.css";

function ListButton(props) {



  return (
    <>
        <button className={style.btnList} onClick={props.onClick}>
            <img src={props.image} alt={props.alt}/>
        </button>
    </>
  )
}

export default ListButton;