// Requerimos path para poder enviar los archivos HTML
const path = require("path");
const fs = require ("fs");

const indexController = {
    index: (req, res)=> {
        res.render("index")
    }
}
module.exports = indexController; 