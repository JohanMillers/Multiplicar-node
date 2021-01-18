const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 12
    }
}

const argv = require('yargs')
            .command('listar','Imprimer en consola la tabla de multiplicar',opts)
            .command('crear','Generar un archivo con la tabla de multiplicar',opts)
            .help()
            .argv;


module.exports = {
    argv
}