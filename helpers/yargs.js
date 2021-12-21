const yargs = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Limite tabla',
                    default: 10
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b)){
                        throw 'la base tiene que ser un numero';
                    }
                    return true;
                } )
                .argv;

module.exports = argv;