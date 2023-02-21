import React,{useEffect,useState } from 'react';
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {

        const db = getFirestore()
        const queryDb = doc(db, 'Productos', idItem )
         getDoc(queryDb)
      



        .then(resp => setDato( { id:resp.id, ...resp.data() } ))
        
       
    }, [idItem]);
    
    return (
        <>
        
        <ItemDetail item={dato} />
        </>
    );
}
export default ItemDetailContainer;