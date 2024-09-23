import React from 'react'
import ListButton from "./components/ListButton/index.jsx";
import style from "./style.module.css";
import addIcon from "../../assets/add.png";
import trashIcon from "../../assets/trashicon.png"
import pencilIcon from "../../assets/pencil.png"

function Home() {


  return (
    <div className={style.buttonContainer}> 
    <ul className={style.list}>
        <li className={style.btnList}><ListButton image={addIcon} alt={"addIcon"}/></li>
        <li className={style.btnList}><ListButton image={trashIcon} alt={"trashIcon"}/></li>
        <li className={style.btnList}><ListButton image={pencilIcon} alt={"pencilIcon"}/></li>
    </ul>
    </div>
  )
}

export default Home;
