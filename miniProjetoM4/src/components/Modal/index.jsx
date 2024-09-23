import React from "react";
import style from "./style.module.css";
import closeIcon from "../../assets/close-button.png";

function Modal(props) {



   if (props.isOpen) {
    return (
        <div className={style.modal}>
            <div className={style.modalContent}>

                <div className={style.headerModal}>
                    <button id={style.closeModalButton} image={closeIcon} onClick={props.setModalOpen}>
                    <img src={closeIcon} alt="closeIcon"></img>
                    </button>
                </div>
            
                {props.children}

            </div>
        </div>
    )
    };

    return null;

   };
    
  

export default Modal;