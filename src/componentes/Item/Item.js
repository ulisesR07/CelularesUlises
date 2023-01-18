import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import './Item.css';





const  Item= ({id,title,stock,price,pictureUrl,idcategoria}) =>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pictureUrl} className="card-img-products"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         identificador: {id}
        </Card.Text>
        <Card.Text>
        Precio: ${price}
        </Card.Text>
        <Card.Text>
         Stock disponible: {stock} unidades.
        </Card.Text>
        <Card.Text>
         Categoria: {idcategoria} 
        </Card.Text>
        <Button variant="success"> <Link to={`/item/${id}`}>Ver detalle...</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Item;