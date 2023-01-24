import { useState } from 'react';
import ItemCount from '../ItemListContainer/ItemCount';
import Card from 'react-bootstrap/Card';
import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
  
console.log("ItemDetailll: "+item)
   
    
   
   const onAdd = (qty) => {
    console.log("ItemDetail,Dentro de onAdd: "+(item.id))
           
       alert("tu seleccionaste para agregar al carrito " + qty + " elementos.");
        setItemCount(qty);
        
    }

    return (
        <>
        {
            item 
           ? 
          
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {item.imagen} className="itemDetail-img"/>
      <Card.Body>
   
        
        <Card.Title>{item.nombre}
</Card.Title>
        <Card.Text>
          
         identificador: {item.id}
        </Card.Text>
        <Card.Text>
           
        Precio: ${item.costo}
        </Card.Text>
        <Card.Text>
           
         Stock disponible: {item.stock} unidades.
        </Card.Text>
        <Card.Text>
    
           Descripcion: {item.descripcion}
        </Card.Text>
        {
            
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                        :
                        <p>Terminar mi Compra</p>
                  
                    }

      </Card.Body>
    </Card>


            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;