const { addAbortSignal } = require('stream');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./helpers/yargs')
console.clear();

console.log(argv);


// const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
     .then(nombreArchivo => console.log(`${nombreArchivo} creado ...`))
     .catch( error => console.log( error ));