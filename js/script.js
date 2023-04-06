/* planilla drive:
https://docs.google.com/spreadsheets/d/e/2PACX-1vReSDxVdhE71WX0H4M9wdpEJGalzh-WVRoODZB5q9xrQ5QurhL96Fmrb3vA-JZU0UvonnJvAm_luWS4/pub?gid=0&single=true&output=csv
 */   
const formUsers = document.querySelector(".formUsers")
const contanerUsers = document.querySelector("#contanerUsers")
const users = []

renderizarUsuarios = () =>{
    contanerUsers.innerHTML = ""
    for (const user of users) {
        contanerUsers.innerHTML += `
        <div class="user-card">
            <h2>Nombre: ${user.nombre}</h2>
            <p>Email: ${user.email}</p>
            <p>Contraseña: ${user.contrasena}</p>
            <p>Provincia: ${user.provincia}</p>
        </div>
        `
    }

}

formUsers.addEventListener("submit", (event) =>{
    event.preventDefault()    
    users.push({
        nombre: formUsers.nombre.value,
        email: formUsers.email.value,
        contrasena: formUsers.contrasena.value,
        provincia: formUsers.provincia.value
    })
    renderizarUsuarios()
} )
           
//*  a oartir de aca para paquetes turisticos:

const contenedorHTML = document.getElementById("container-flex")
fetch("./tourpack.json")
    .then(response => response.json())
    .then(data =>{
        for(const pack of data){
            contenedorHTML.innerHTML+=`
            <div class="cardPromo">
                <h2>${pack.idPack} ${pack.ttuloDescriptivo}</h2>                
                <img src=${pack.image} alt="imagen desl lugar a visitar" width="300px" height="200px">
                <p>Transporte: ${pack.transporte}</p>
                <p>Servicio: ${pack.servicioHotel}</p>
                <p>Hotel: ${pack.hotel}</p>                
                <p>Estado: ${pack.estado}</p>
                <p>Precio: ${pack.precio}</p>
            </div>
            `
        }
        
    })

/*
"idPack": "SU-589",
    "ttuloDescriptivo": "Semana Santa en San Carlos de Bariloche",
    "servicioHotel": "PENSIÓN COMPLETA",
    "transporte": "AER-TURISTA-DESDE ezeiza",
    "hotel": "HOTEL NEVADA",
    "tipo-de-reserva": "inflexible",
    "telContactp": 1189654231,
    "estado": "DISPONIBLE",
    "precio": 78563,
    "cupos": 50,
    "desde": "01/04/23",
    "hasta": "09/01/23",
    "image": "https://riosdelplaneta.com/wp-content/uploads/2019/12/cataratas-del-iguazu-2.jpg"


    
    */