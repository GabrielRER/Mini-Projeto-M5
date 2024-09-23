import React, {useState, useEffect} from "react";
import ListButton from "./components/ListButton/index.jsx";
import style from "./style.module.css";
import addIcon from "../../assets/add.png";
import trashIcon from "../../assets/trashicon.png";
import pencilIcon from "../../assets/pencil.png";
import loupeIcon from "../../assets/loupe.png";
import GetForm from "./components/GetForm/index.jsx";
import Modal from "../../components/Modal/index.jsx";
import closeIcon from "../../assets/close-button.png";

function Home() {

    const [openModal, setOpenModal] = useState(false);

    
    
  return (
    <>
    <div className={style.container}>

    <div className={style.buttonContainer}> 

    <ul className={style.list}>
        <div>
        <li className={style.btnList}><ListButton image={addIcon} alt={"addIcon"} onClick={() => setOpenModal(true)}/></li>
        
        </div>
        <li className={style.btnList}><ListButton image={trashIcon} alt={"trashIcon"}/></li>
        <li className={style.btnList}><ListButton image={pencilIcon} alt={"pencilIcon"}/></li>
    </ul>

    </div>
    

    <div className={style.searchContainer}>

        <div className={style.searchBar}>
        <h3>Pesquise uma tarefa:</h3>
        <input className={style.inputSearchBox}></input>
        </div>
        
        

    </div>

    <ul className={style.searchButton}>
        <li><ListButton image={loupeIcon} alt={"loupeIcon"}/></li>
        </ul>

    </div>

    <GetForm/>

    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <div className={style.headerAddModal}>
            <h2>Adicionar Tarefa</h2>
           
        </div>
        

        <form className={style.taskAddForm}>
            <h3>Digite a tarefa: </h3>
            <input></input>
            <h3>Digite o prazo: </h3>
            <input type="date"></input>
            <h3>Digite um marcador: </h3>
            <input></input>
        </form>
    </Modal>

    </>
  )
}

export default Home;
