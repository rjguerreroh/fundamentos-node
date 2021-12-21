const fs = require('fs');
const crearArchivo = (base = 5, listar = true, limite = 10) => {
    return new Promise((resolve, reject) => {
        try {
            let salida = '';
            
            for (let i = 1; i <= limite; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
            }
            
            if(listar){
                console.log('======================');
                console.log(`Tabla del ${base}`);
                console.log('======================');
                console.log(salida);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            resolve (`tabla-${base}.txt`);
        } catch (error) {
            reject('Ocurrio un Error')
            
        }
    })
}

module.exports = {
    crearArchivo
}