import React,{useEffect,useState } from 'react';
import customFetch from "../../utils/customFetch";
import { useParams } from "react-router";
import ItemDetail from '../ItemDetail/ItemDetail';



const { productos } = require('../../utils/productos');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    const { idItem } = useParams();
    console.log(idItem);
    console.log("HOLA3");

  
    
    useEffect(() => {

        customFetch(2000, productos.find(item => {
            if (idItem === undefined) return item;
            
            return item.id === parseInt(idItem) 
        }))
      
            .then(result => setDato(result))
            .catch(err => console.log(err))
        
        
    }, [idItem]); 
    
    return (
        <>
        
        <ItemDetail item={dato} />
        
        </>
    );
}

export default ItemDetailContainer;