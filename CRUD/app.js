// se obtienen los elementos del html
const botonAdd = document.getElementById("boton-add");
const botonUpdate = document.getElementById("boton-update");
const botonDelete = document.getElementById("boton-delete");
const tabla = document.getElementById("mi-tabla");

let i = 0;

botonAdd.addEventListener("click", () => {
  i++;
  const dato1 = window.prompt("ingresa el ejercicio");
  const dato2 = window.prompt("ingresa el horario");
  const dato3 = window.prompt("ingresa la duracion");

  // estas instrucciones crean una fila de 4 columnas,
  // y la insetan en la tabla ya creada en el html
  let row = document.createElement("tr");

  let id = document.createElement("td");
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");

  // se inserta un id, de forma predefinida e incremental
  id.innerText = i;
  c1.innerText = dato1;
  c2.innerText = dato2;
  c3.innerText = dato3;

  row.appendChild(id);
  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);

  tabla.appendChild(row);
});

botonUpdate.addEventListener("click", () => {
  // se obtiene el nodeList del elemento "tabla"(todas sus filas)
  const list = tabla.childNodes;

  let elem = window.prompt("elegi que id actualizar");

  let index = 1;

  // se valida el dato ingresado,para que solo acepte numeros
  if (isNaN(parseInt(elem))) {
    console.log("valor incorrecto");
  } else {
    // se incrementa en 1 la variable elem,
    // por que la primer fila en el nodeList tiene indice 2
    elem++;

    // si no se encuentra el id ingresado,se devuelve error
    if (list.item(elem) == null || elem < index) {
      console.log("errorrr");
    } else {
      // se busca el indice de la fila (indice ingresado por el usuario)

      let fila = list[elem].firstChild;

      const dato1 = window.prompt("ingresa el ejercicio");
      const dato2 = window.prompt("ingresa el horario");
      const dato3 = window.prompt("ingresa la duracion");

      fila = fila.nextSibling;
      fila.innerText = dato1;
      fila = fila.nextSibling;
      fila.innerText = dato2;
      fila = fila.nextSibling;
      fila.innerText = dato3;
    }
  }
});

botonDelete.addEventListener("click", () => {
  // se obtiene el nodeList del DOM
  const list = tabla.childNodes;

  let elem = window.prompt("elegi que id borrar");

  let index = 1;

  // se valida el tipo de dato ingresado por el usuario
  if (isNaN(parseInt(elem))) {
    console.log("valor incorrecto");
  } else {
    elem++;

    // si el id no esta en la tabla, se devuelve error
    if (list.item(elem) == null) {
      console.log("errorrr");
    } else {
      // se selecciona la fila elegida,y se borra
      let fila = list[elem];
      fila.remove();
    }
  }
});
