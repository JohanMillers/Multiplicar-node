const argv = require('yargs')
            .command('listar','Imprimer en consola la tabla de multiplicar',{
                base: {
                    demand: true,
                    alias: 'b'
                },
                limite: {
                    alias: 'l',
                    default: 12
                }
            })
            .command('crear','Generar un archivo con la tabla de multiplicar',{
                base: {
                    demand: true,
                    alias: 'b'
                },
                limite: {
                    alias: 'l',
                    default: 12
                }
            })
            .help()
            .argv; 




const {crearArchivo, listarTablas} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar': 
        listarTablas(argv.base, argv.limite);
        break;

    case 'crear': 
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido');
}





// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);




