// Require
const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise( (res, rej) => {
//Verificando que el dasto pasado sea un numero
        if (!Number(base)) {
            rej(`El valor introducido ${base} no es un numero`)
        }
//Verificando que el dasto pasado sea un numero


//Declaramos la variables
    let resultado = '';
//Declaramos la variables


    for (let i = 1; i<=12; i++) {
        //Creamos nuestra tabla
        resultado += `${base} * ${i} = ${base * i}\n`
        //Creamos nuestra tabla

        // console.log(resultado);
    }
//Grabado en el archivo .Txt la informacion
    fs.writeFile(`Tablas/Tabla-${base}.txt`,resultado,(err)=> {
        if(err) rej(err)
        else
           res(`Tabla-${base}.txt`); 
    });
});
//Grabado en el archivo .Txt la informacion

}

module.exports = {
    crearArchivo
}

