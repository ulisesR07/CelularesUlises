//tematica de la CLASE 4: crear ItemCount.js
import { useEffect, useState } from 'react';

/*al parametro "initial" llegara el useState llamado itemCount, 
que se encuentra declarado en el componente ItemDetail */
const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial); /*con el valor de initial seteo el useState llamado count*/
    },[initial]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);/*cada vez que cambie el valor de count cambiara el useState itemCount, porque entro a traves del parametro llamado initial*/

            console.log(count)
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
            console.log(count)
        }
    }
    return (
        <>

            <button variant="text" onClick={increment} >+</button>
           <span>{count}</span>
            <button variant="text" onClick={decrement}>-</button>
            {
                stock && count
                ? <button variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al Carrito</button>

                : <button variant="contained" disabled>Agregar al Carrito</button>
            }
         </>   
        
    );
}

export default ItemCount;