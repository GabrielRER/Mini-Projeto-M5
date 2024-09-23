import React, {useEffect, useState} from "react";
import style from "./style.module.css";

 function CardAPI(props) {

    const [isChecked, setIsChecked ] = useState();

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };


  return (
    <>
      <main>
        <div className={style.card}>
          <h1>{props.task}</h1>
          <div className="infos">
            <h3 className="firstInfo">Data Final: {props.deadline}</h3>
            <h3 className="secondInfo">Tag: {props.tag}</h3>
            {props.done === true &&
                <h3 className="secondInfo">Concluído: Sim</h3>
            }
            {props.done !== true &&
                <h3 className="secondInfo">Concluído: Não</h3>
            }
          </div>
        </div>
        <input className={style.btnCard} type="checkbox" checked={props.done} onChange={handleCheckboxChange}></input>
      </main>
    </>
  )
}

export default CardAPI;