import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../componentes/Cart/Cart";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import NavBar from "../componentes/Nabvar/Nabvar";
import Order from "../componentes/Order/Order"

const Home = () => {
    return (
        
        <BrowserRouter>
        
            <NavBar />
            
            <Routes>
                {/* :idcategory es la varible que le pasara el usuario por URL, para luego carga el componente*/}
                
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:idCategory' element={<ItemListContainer /> }/>
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/order/:orderId" element={<Order />} />
            </Routes>
       
        </BrowserRouter>
        
    );
}

export default Home;