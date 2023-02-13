import Item from "../Item/Item";


const ItemList=({items})=>{
    console.log("ItemList items pasaso al cargar categoria en itemlistcontainer :"+ items.id);
return (
<div>
    {
   
        items.length>0 
    
        ?items.map(item=><Item key={item.id} id={item.id} title={item.nombre}  price={item.costo} pictureUrl={item.imagen} stock={item.stock} idcategoria={item.idcategoria}/>)
        :<p>Cargando no hay categoria...</p>

    }
</div>
);

}
export default ItemList;