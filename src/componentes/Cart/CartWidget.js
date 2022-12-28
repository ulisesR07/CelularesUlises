import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';



const Carrito =()=>{
    
    return(
        <>
<FontAwesomeIcon icon={faCartShopping}/>


                <Badge pill bg="danger">{iconCart()}</Badge>

        </>
    )
}
export default Carrito