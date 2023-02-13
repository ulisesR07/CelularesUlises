import { Link } from 'react-router-dom';

import { useCartContext } from "../../context/cartContext";



import PriceTotal from '../PriceTotal/PriceTotal';

import FormCount from '../FormCount/FormCount'


const Cart = () => {
  const { cartList, removeProduct, orderReady, orderId } = useCartContext();
  return (
    <div className="container py-10">
      
      
     
      {orderReady && (
        <div className="flex flex-col items-center justify-center text-center h-96">
          <h2 className="mb-8 text-3xl font-extrabold text-gray-700">
            Gracias por tu compra <br />

        
            tu Numero de compra # es : {orderId}
          

          </h2>
        </div>
      )}
  
      {!orderReady && cartList.length === 0 ? (


        <div className="flex flex-col items-center justify-center text-center h-96">
          <h2 className="mb-8 text-3xl font-extrabold text-gray-700">
            El carrito no contiene productos
          </h2>
          <Link to={'/'}>
            <button
              type="button"
              className="px-4 py-3 font-bold text-center text-white bg-indigo-500 rounded hover:bg-indigo-700"
            >
              continuar comprando
            </button>
          </Link>

        </div>
      ) : 



      (
        <>
          <div className="grid grid-cols-1 px-4 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
            cartList.map((item) => {
              return (
                <div
                  key={item.product.id}
                  className="relative flex flex-col justify-between group"
                >
                  <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={item.product.imagen}
                      alt={item.product.nombre}
                      className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                    />
                  </div>


                  <div className="mb-4">
                  <h3 className="text-sm font-extrabold text-gray-700">
                      <span aria-hidden="true" className="inset-0" />
                      {item.product.nombre}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-gray-500 capitalize">
                      {item.product.category}
                    </p>
                    <p className="mt-3 font-bold text-green-600 text-md">{`Precio :$${item.product.costo}`}</p>

                    <p className="font-bold text-indigo-700 text-md">{`Cantidad :  ${item.quantity} `}</p>

                    <p className="font-bold text-green-600 text-md">
                      Sub total : $
                      {parseInt(item.quantity) * parseInt(item.product.costo)}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="px-4 py-3 font-bold text-center text-white bg-red-500 rounded hover:bg-red-700"
                    
                    onClick={() => removeProduct(item.product.id)}
                  >
                    ELIMINAR PRODUCTO{' '}
                  </button>


                </div>
              );
            })}
          </div>
        </>
      )}

      {cartList.length > 0 ? (
        <>
         <FormCount />
          <PriceTotal />
        </>
      ) : null}

    </div>
  );
};

export default Cart;