
import React,{useEffect,useState } from 'react';
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';
import { getItems } from '../../config/api';
 
const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    console.log("ItemListContainer idCategoria:"+ idCategory);
   useEffect(() =>{
    
    getItems().then((res) =>{
      if(idCategory){
        const filtrado = res.filter((data) => data.idcategoria === idCategory)
        setDatos(filtrado)
      }else{
        setDatos(res)
      }
     
    })
    
  },[idCategory])
    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;