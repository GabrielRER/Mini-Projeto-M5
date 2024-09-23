import React, {useEffect, useState} from "react";
import style from "./style.module.css";

 function CardAPI(props) {

  return (
    <>
      <main>
        <div className={style.card}>
          <h1>{props.task}</h1>
          <div className="infos">
            <p className="firstInfo">{props.deadline}</p>
            <p className="secondInfo">{props.tag}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default CardAPI;