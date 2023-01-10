import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import  Button  from 'react-bootstrap/Button';


const CartWidget =()=>{
    
    return(
        <>
<FontAwesomeIcon icon={faCartShopping}/>    
                <Button variant="danger">
                <Badge pill bg="danger">5</Badge>
                </Button>

                

        </>
    )
}
export default CartWidget