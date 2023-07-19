const express = require("express")
const path = require("path"); 


const indexRoute = require ("./routes/indexRoute");

//creando servidor en express 
const app = express();
//donde cargo los archivos de estilos 
app.use(express.static('public'));


//middlewares 
// declarando los archivos estaticos imgs etc. 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // usar los archivos staticos en views 
app.use(express.json()); // capturar body 


//rutas 
app.use("/", indexRoute); 


// pongo a escuchar el servidor en el puerto 3000 
app.listen(3000, () => console.log('Server is running in http://localhost:3000'));