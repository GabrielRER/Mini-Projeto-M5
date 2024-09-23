import React, {useState, useEffect} from "react";
import ListButton from "./components/ListButton/index.jsx";
import style from "./style.module.css";
import addIcon from "../../assets/add.png";
import trashIcon from "../../assets/trashicon.png";
import pencilIcon from "../../assets/pencil.png";
import loupeIcon from "../../assets/loupe.png";
import GetForm from "./components/GetForm/index.jsx";
import Modal from "../../components/Modal/index.jsx";
import axios from "axios";


function Home() {

    const [openAddModal, setOpenAddModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const [task, setTask] = useState();
    const [deadline, setDeadline] = useState();
    const [tag, setTag] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newTask = { task, deadline, tag};

        try {
            const response = await axios.post("http://localhost:3100/createtask", newTask)
            console.log("task created:", response.data);
            setOpenAddModal(false);
        } catch (error) {
            console.log("Erro ao criar a tarefa", error);
        }
    };   

    

    
    
  return (
    <>
    <div className={style.container}>

    <div className={style.buttonContainer}> 

    <ul className={style.list}>
        <li className={style.btnList}><ListButton image={addIcon} alt={"addIcon"} onClick={() => setOpenAddModal(true)}/></li>
        <li className={style.btnList}><ListButton image={trashIcon} alt={"trashIcon"} onClick={() => setOpenDeleteModal(true)}/></li>
        <li className={style.btnList}><ListButton image={pencilIcon} alt={"pencilIcon"} onClick={() => setOpenEditModal(true)}/></li>
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

    <Modal isOpen={openAddModal} setModalOpen={() => setOpenAddModal(!openAddModal)}>
        <div className={style.headerAddModal}>
            <h2>Adicionar Tarefa</h2>
           
        </div>
        

        <form className={style.taskAddForm} onSubmit={handleSubmit}>
            <h3>Digite a tarefa: </h3>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} required></input>
            <h3>Digite o prazo: </h3>
            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required></input>
            <h3>Digite um marcador: </h3>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} required></input>
            <section className= {style.submitModal}>
                    <input type="submit"></input>    
            </section>  
        </form>
    </Modal>

    <Modal isOpen={openDeleteModal} setModalOpen={() => setOpenDeleteModal(!openDeleteModal)}>
        <div className={style.headerAddModal}>
            <h2>Excluir Tarefa</h2>
        </div>

        <form className={style.taskAddForm}>
            <h3>Digite o id da tarefa: </h3>
            <input></input>
        </form>
    </Modal>

    <Modal isOpen={openEditModal} setModalOpen={() => setOpenEditModal(!openEditModal)}>
        <div className={style.headerAddModal}>
            <h2>Editar Tarefa: </h2>
        </div>

        <form className={style.taskAddForm}>
            <h3>Digite o id da tarefa: </h3>
            <input></input>
            <h3>Digite uma nova tarefa: </h3>
            <input></input>
            <h3>Digite um novo prazo: </h3>
            <input type="date"></input>
            <h3>Digite um novo marcador: </h3>
            <input></input>
        </form>
    </Modal>

    </>
  )
}

export default Home;
