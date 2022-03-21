const fs = require("fs").promises;
//writefile = escribir archivo
//readFile = leer archivo
//rename = renombrer archivo
//unlink = eliminar arch

async function iniciar(){
    await fs.writeFile('lista_productos.txt', '3 litros de pepsi', 'utf-8');

    setTimeout(async function() {
        const datos = await fs.readFile('lista_productos.txt', 'utf-8')
        console.log('los productos son:' + datos);

        setTimeout(async function() {
            await fs.rename('lista_productos.txt', 'lista_de_productos.txt');

            setTimeout(async function() {
               await fs.unlink ('lista_de_productos.txt')
            }, 2000);
            
        }, 2000);
        
    },2000);
}
//cada metodo tiene que tener un tiempo de 2 segundos 
iniciar();