// Require
const fs = require('fs');
const color = require('colors');


const listarTablas = (base, limite = 12 ) => {

    console.log('========================'.green);
    console.log(`    Tabla de ${base}`.green);
    console.log('========================'.green);
    

    for (let i = 1; i <= limite; i++) {
        //Creamos nuestra tabla
        console.log(`${base} * ${i} = ${base * i}\n`);
        //Creamos nuestra tabla
    }



}

let crearArchivo = (base, limite = 12) => {
    return new Promise( (res, rej) => {
//Verificando que el dasto pasado sea un numero
        if (!Number(base)) {
            rej(`El valor introducido ${base} no es un numero`)
        }
//Verificando que el dasto pasado sea un numero


//Declaramos la variables
    let resultado = '';
//Declaramos la variables


    for (let i = 1; i<=limite; i++) {
        //Creamos nuestra tabla
        resultado += `${base} * ${i} = ${base * i}\n`
        //Creamos nuestra tabla

        // console.log(resultado);
    }
//Grabado en el archivo .Txt la informacion
    fs.writeFile(`Tablas/Tabla-${base} al ${limite}.txt`,resultado,(err)=> {
        if(err) rej(err)
        else
           res(`Tabla-${base} al ${limite}.txt`); 
    });
});
//Grabado en el archivo .Txt la informacion

}

module.exports = {
    crearArchivo,
    listarTablas
}

