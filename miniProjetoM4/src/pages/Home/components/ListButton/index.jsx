import React from 'react';
import './style.css';

function ListButton(props) {



  return (
    <>
        <button>
            <img src={props.image} alt={props.alt}/>
        </button>
    </>
  )
}

export default ListButton;