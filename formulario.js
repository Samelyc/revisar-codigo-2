// Se cambiaron las variables de ver a let 

let formulario = document.querySelector("#formulario"); // Se cambio el id a formulario para que sea igual al html

formulario.onsubmit = function(event) { // Se cambio el nombre de la función de "e" a "event"
  event.preventDefault(); // Cambié el metodo de e.prevent() para que funcionara y enviara eñ formulario correctamente


  // Cambie el nombre de las variables de n, e, na para que se pueda leer mejor y se agrego el metodo "getElementById" para que llamara mejor a la función
  let nombre = document.getElementById("name").value;
  let edad = document.getElementById("age").value;
  let nacionalidadElement = document.getElementById("nationality");
  let nacionalidad = nacionalidadElement.options[nacionalidadElement.selectedIndex].value;

  // Se agrego el documet.getElementById - para que coincidiera con el de arriba 
  if (nombre.length === 0) {
    document.getElementById("name").classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    document.getElementById("age").classList.add("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// Función que agrega un invitado a la lista.
function agregarInvitado(nombre, edad, nacionalidad) {
 // Aqui creamso un objeto para que se agregen los nombres completos.
  const nacionalidades = {
    "ar": "Argentina",
    "mx": "Mexicana",
    "per": "Peruana",
    "vnzl": "Venezolana"
  };

  let nacionalidadCompleta = nacionalidades[nacionalidad] || "Desconocida";

  let lista = document.getElementById("lista-de-invitados");

  //Crea un elemento para los invitados
  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidadCompleta, elementoLista);

   // Botón para eliminar un invitado
  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.onclick = function() {   // Se agrego el evento 'onclick'
    elementoLista.remove();
  };

  elementoLista.appendChild(document.createElement("br"));
  elementoLista.appendChild(botonBorrar);
}

function crearElemento(descripcion, valor, contenedor) {
  let spanDescripcion = document.createElement("span");
  let inputValor = document.createElement("input");
  let espacio = document.createElement("br");

  spanDescripcion.textContent = descripcion + ": ";
  inputValor.value = valor;
  inputValor.disabled = true;

  contenedor.appendChild(spanDescripcion);
  contenedor.appendChild(inputValor);
  contenedor.appendChild(espacio);
}
