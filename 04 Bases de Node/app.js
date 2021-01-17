// Require
const fs = require('fs');

let base = 12;
let resultado = '';

for (let i = 1; i<=12; i++) {
    resultado += `${base} * ${i} = ${base * i}\n`
    console.log(resultado);
}

fs.writeFile(`Tablas/Tabla-${base}.txt`,resultado,(err)=> {
    if(err) throw err;

    console.log(`El archivo Tabla-${base}.txt ha sido creado`);
    
})