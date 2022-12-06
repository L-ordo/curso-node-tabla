

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type:'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})    
.option('l', {
    alias: 'listar',
    type:'boolean',
    default: false,
    describe: 'Es el listado de la tabla de multiplicar'
}) 
.option('h', {
    alias: 'hasta',
    type:'number',
    default: 10,
    describe: 'Es la cantidad de datos de la tabla de multiplicar'
})    
.check( (argv, options)=>{
    if (isNaN( argv.b )){
        throw 'Muestra la tabla en consola'
    }
    return true;
} )
.argv;


module.exports = argv;