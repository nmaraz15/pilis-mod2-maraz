/*--Api para el clima--*/
const URL_API = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "58fcdbab9c859a3592bcb84e1cc11eec";
const LATITUDE = -24.18;
const LONGITUDE = -65.33;

/* --------formulario--------------- */
function onClick (event) {
    event.preventDefault();
    this.style.backgroundColor = "black";
    console.log("click...");
    console.log(event);
  
  
    const mensaje = {
      comercio: document.getElementById('comercio').value,
      titular: document.getElementById('titular').value,
      celular: document.getElementById('celular').value
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por registrar tu comercio.',
              'success'
          );
          cleanForm();
      })
      .catch((err) => console.log(err));
  
  }



function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
function redirectUrl(){
    window.location.href = "https://google.com";    
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);


/* ------Clima--------- */

const params = new URLSearchParams({
    lat: LATITUDE,
    lon: LONGITUDE,
    appid: API_KEY,
    lang: "sp",
    units: "metric",
  });
  
  const list = document.querySelector(".cities");
  fetch(URL_API + params)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
      const temp = main.temp.toFixed(1);
      const div = document.createElement("div");
  
      console.log(data);
      div.classList.add("border");
      const markup = `
      <p class="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
       
      </p>
      <div class="city-temp">${temp}°C</div>
      <figure>
        <img class="city-icon" src=${icon} alt="${weather[0]["description"]}">
        <figcaption>${weather[0]["description"]}</figcaption>
      </figure>`;
      div.innerHTML = markup;
      list.appendChild(div);
    });



/* --------PROMESA------- */

class Persona{
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};


const data = [
    ["Brian_Silva", "@BrianSILVA1998"],
    ["Maraz", "@Maraz19283"],
    ["RancioRamirez", "@RancioRamirez"],
    ["CamilaNesa"],
];

const personas = [];

for (let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0],data[i[1]]);
}

const obtenerPersona = (id) => {
    return new Promise((resolve,reject) =>{
        if (personas[id] == undefined) reject("No se ha encontrado la persona")
        else {resolve(personas[id])}
    })
}
const obtenerInstagram = (id) => {
    return new Promise((resolve, reject) =>{
        if (personas[id].instagram == undefined)reject("No se ha encontrado el instagram")
        else {resolve(personas[id].instagram)}
    })
}

let id = 0;

obtenerPersona(id).then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{ 
    console.log(instagram)
    }).catch((e)=>{
        console.log(e)
    })



/* ----------AWAIT & ASYNC---------- */
  const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
};

const obtenerInformacion = (text)=>{
    return new Promise((resolve,reyect)=>{
        setTimeout(()=> {resolve(text)},Math.random()*200)
    })
}

const mostrarResultado = async ()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
 }

 mostrarResultado();

 /* ------otro--- */

 obtenerInformacion("1: css").then(resultado => console.log(resultado))
 obtenerInformacion("2: js").then(resultado => console.log(resultado))
 obtenerInformacion("3: html").then(resultado => console.log(resultado))
 
  const mostrarData = async() =>{
    data1 = await obtenerInformacion("1: css");
    data2 = await obtenerInformacion("2: js");
    data3 = await obtenerInformacion("3: html");
    console.log(data1);
    console.log(data2);
    console.log(data3);
 }

 mostrarData()
