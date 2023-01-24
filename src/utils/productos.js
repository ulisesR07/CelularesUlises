const productos =[
    {
    id:20,
    nombre:"Producto 1",
    stock:9,
    costo: 350000,
    descripcion:"Producto 1 el mejor android del momento",
    imagen:["s23.jpg"],
    idcategoria:1,
    categoria:{
        nombre:"ss",
        id:1
    }
    },
    {
        id:21,
        nombre:"Producto 2",
        stock:5,
        costo: 40000,
        descripcion:"Producto 2 mejor iphone del momento",
        imagen:["iphone.jpg"],
        idcategoria:2,
        categoria:{
            nombre:"ee",
            id:2
        }
        
        }
    ];
    module.exports = {
        productos,
      }
    