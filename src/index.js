//estas dos son librerias de React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

//esto es una variable que yo creo, tiene que se un componente de React
import App from './App';
import './index.css'
//los componentes de ract siempre son funciones que arrancan con la primera letra en mayuscula y tienen que retornar algo

/*class App extends React.Component {
    render () {
        return "Hola mundo"
    }
}
*/

// const App = () => {
//     return "Hola mundoooo"
// }

/* function App (){
    //return ?
} 
*/

//uso la libreria de React-dom para renderizar el componente App en el elemento con id root (que esta en el index.html en public/)  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

