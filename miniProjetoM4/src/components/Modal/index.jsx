import React from "react";
import style from "./style.module.css";

function Modal(props) {



   if (props.isOpen) {
    return (
        <div className={style.modal}>
            <div className={style.modalContent}>{props.children}</div>
        </div>
    )
    };

    return null;

   };
    
  

export default Modal;