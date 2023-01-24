import React,{useEffect,useState } from 'react';
import { useParams } from "react-router-dom";

import customFetch from "../../utils/customFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
//import { doc, getDoc, getFirestore } from 'firebase/firestore';
const { productos } = require('../../utils/productos');



//2: REALIZA LA BUSQUEDA DE LOS PRODUCTOS EN LA BASE DE DATOS
//2: Viene el idItem desde el componente item, que es cuando presiono el boton Ver detalle...

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    const { idItem } = useParams();
   
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