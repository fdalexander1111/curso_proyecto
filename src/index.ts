import express from 'express';
import routerProduct from '../routes/product';
import routerShoppingCart from '../routes/shoppingCart';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.use("/api/productos", routerProduct);
app.use("/api/carrito", routerShoppingCart);


app.use((req, res) => {
  const array = {
    "error": -2,
    "descripcion":  `ruta: ${req.url} metodo: ${req.method} no implementado`
  }
  res.status(404).json(array);

})

const PORT = process.env.PORT || 8080; 

app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto 8080');
});