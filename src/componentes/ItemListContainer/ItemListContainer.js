
// import React from 'react';


// const ItemListContainer = (props) => {
//     return (
//         <div>{props.greeting}</div>
//     )
// }

// export default ItemListContainer;




import React,{useEffect,useState } from 'react';
import { useParams } from 'react-router';
import customFetch from '../../utils/customFetch';
import { productos } from '../../utils/productos';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    console.log("ItemListContainer idCategoria:"+ idCategory);
  
    useEffect(() =>{
    customFetch(2000, productos.filter(item => {
        if (idCategory === undefined) return item;
        
        return item.idcategoria === parseInt(idCategory)
    }))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
}, [idCategory]);
   
    return (
        <>  
            <ItemList items={datos}/>
        </>
    );
}

export default ItemListContainer;