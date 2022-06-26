const Contenedor = require('./main.js')

const nuevoContenedor = new Contenedor('productos.json')

nuevoContenedor.save({title:'hp'})
.then(r=>console.log(r))