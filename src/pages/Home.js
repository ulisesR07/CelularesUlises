import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import NavBar from "../componentes/Nabvar/Nabvar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
        
    <BrowserRouter>
    
        <NavBar />
        
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:idCategory' element={<ItemListContainer /> }/>
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            </Routes>
       
        </BrowserRouter>
        
    );
};

export default Home;
