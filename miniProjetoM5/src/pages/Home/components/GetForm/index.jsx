import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.css";
import CardAPI from "../../../../components/CreateCard/index.jsx";

function GetForm() {

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await axios.get("http://localhost:3100/listtask");
            setItems(response.data.listTask);
            console.log("deu certo");
        } catch (error) {
            console.log("Erro ao buscar itens da API", error);
        }
    };

    useEffect (() => {
        fetchItems();
    }, []);

  return (
    <div className={style.itemList}>
            <h2>Lista de Itens</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <CardAPI task={item.task} deadline={item.deadline} tag={item.tag} done={item.done}/>
                    </li>
                ))}
            </ul>
        </div>
  )
};

export default GetForm;
