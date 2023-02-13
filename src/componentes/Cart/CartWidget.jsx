import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from "../../context/cartContext";
import Badge from 'react-bootstrap/Badge';



const Carrito =()=>{
    
    const { iconCart,cartList } = useCartContext();
    return(
        <>
<FontAwesomeIcon icon={faCartShopping}/>

      {cartList.length === 0 
            ?
                <span></span>
            :
                <Badge pill bg="danger">{iconCart()}</Badge>}

        </>
    )
}
export default Carrito