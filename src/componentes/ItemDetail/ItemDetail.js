import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import React from 'react';
import Card from "react-bootstrap/Card"

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
   
   const onAdd = (qty) => {
    
       alert("tu seleccionaste para agregar al carrito " + qty + " elementos.");
        
        
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

      </Card.Body>
    </Card>

            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;