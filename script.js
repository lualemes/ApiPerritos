const api = 'https://dog.ceo/api/breeds/image/random'
const apiRazas = 'https://dog.ceo/api/breeds/list/all'
const main = document.getElementById('principal')
   

document.addEventListener('DOMContentLoaded', async()=>{
    let respuesta =await getFetch(apiRazas)
    GenerarDDL(respuesta)
    const ddl=document.getElementById("ddlrazas")
    ddl.addEventListener("change",async ()=>{
        divFoto.innerHTML="";
        let opcionelegida=ddl.value;
        let apiConRaza=`https://dog.ceo/api/breed/${opcionelegida}/images/random`
        let info=await getFetch(apiConRaza)
        mostrarFoto(info)
    }) 
})

function mostrarFoto(url){
    const divFoto = document.getElementById('divFoto') 
    let contenedor = document.createElement('div')
    let img = document.createElement('img')
    img.src = url.message

    contenedor.appendChild(img)
    divFoto.appendChild(contenedor)

}

async function getFetch(url){
    return fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        return(data)
    })
}

function GenerarDDL(arreglo){
    let ddl=document.getElementById("ddlrazas")
    let razas = Object.keys(arreglo.message);
    console.log(arreglo.message)
    razas.forEach(i => {
        ddl.innerHTML+=`
        <option value="${i}">${i}</option>
        `
    });

}

function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}