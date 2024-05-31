/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    let nombres = prompt("Cual es tu nombre?").split(" ");
    datosPersona.nombre = nombres.map( nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()).join(" ")
    let domicilio = prompt("En que ciudad vives?").split(" ");
    datosPersona.ciudad = domicilio.map( ciudad => ciudad.charAt(0).toUpperCase() + ciudad.slice(1).toLowerCase()).join(" ")
    datosPersona.interesPorJs = prompt("Te interesa Javascript? (si/no)").toLowerCase();

    let anioActual = 2024;
    datosPersona.edad = anioActual - parseInt(prompt("En que año naciste?"));

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    document.getElementById("nombre").textContent = datosPersona.nombre;
    document.getElementById("edad").textContent = datosPersona.edad;
    document.getElementById("ciudad").textContent = datosPersona.ciudad;
    document.getElementById("javascript").textContent = datosPersona.interesPorJs === "si" ? "Sí" : "No";

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    const fila = document.getElementById("fila");
    let materiasObtenidas = false;
    if (!materiasObtenidas){
      fila.innerHTML = " ";

    listado.forEach(materia => {
      let tarjeta = document.createElement("div");
      tarjeta.classList.add("caja");

      let imagen = document.createElement("img");
      imagen.src = materia.imgUrl;
      imagen.alt = materia.lenguajes;
      tarjeta.appendChild(imagen);

      let parrafo = document.createElement("p");
      parrafo.classList.add("lenguajes");
      parrafo.textContent = materia.lenguajes;
      tarjeta.appendChild(parrafo);

      let bimestre = document.createElement("p");
      bimestre.classList.add("bimestre");
      bimestre.textContent = materia.bimestre;
      tarjeta.appendChild(bimestre);

      fila.appendChild(tarjeta);

    })
    materiasObtenidas = true;
  }
  materiasBtn.disabled = true;
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
    let sitio = document.getElementById("sitio");
    sitio.classList.toggle("dark");

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener("keydown", function(event){
  if(event.key === "F"){
    document.getElementById("sobre-mi").classList.remove("oculto");
  }
});