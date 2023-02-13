import Home from "./pages/Home"
import { CartContextProvider } from "./context/cartContext";

const App = () => {


  return (
    
    <CartContextProvider>
    <Home />
    </CartContextProvider>
  );
};

export default App;
