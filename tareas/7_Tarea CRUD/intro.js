let cuerpoTabla = document.querySelector("tbody");
let inputModel = document.querySelector("#model");
let inputBrand = document.querySelector("#brand");
let inputAnio = document.querySelector("#year");
let inputDescripcion = document.querySelector("#description");
let inputPicture = document.querySelector("#picture");
let formulario = document.getElementById("vehicle-form");

let update = false; //que indica si estamos actualizando o no
let idUpdate = null; //guardar el id del Vehiculo que queremos actualizar
//Array de objetos
const listaVehiculos = [
  {
    id: 1,
    modelo: "Supra MK IV",
    fabricante: "Toyota",
    anio: 1993,
    descripcion:
      "Vehiculo utilizado en la saga de películas 'Rápido y Furioso', conocido por su potente motor 2JZ-GTE",
    img: "https://i.pinimg.com/736x/13/8f/06/138f0675237eec3563d1475ec63f7262.jpg",
  },
  {
    id: 2,
    modelo: "F40",
    fabricante: "Ferrari",
    anio: 1987,
    descripcion:
      "Considerado uno de los mejores superdeportivos de todos los tiempos, el Ferrari F40 fue construido para celebrar el 40 aniversario de la marca italiana.",
    img: "https://i.pinimg.com/736x/9a/37/a3/9a37a37757b248a4aecd32d3ab854497.jpg",
  },
  {
    id: 3,
    modelo: "Quattro",
    fabricante: "Audi",
    anio: 1987,
    descripcion:
      "El Audi Quattro revolucionó el mundo del automovilismo con su sistema de tracción en las cuatro ruedas, dominando en rallies y estableciendo un nuevo estándar para los vehículos deportivos.",
    img: "https://i.pinimg.com/736x/50/9c/5c/509c5c3f16ef9bc1f232754a4b5c7e6e.jpg",
  },
  {
    id: 4,
    modelo: "Countach",
    fabricante: "Lamborghini",
    anio: 1974,
    descripcion:
      "El Lamborghini Countach es un ícono del diseño automotriz, conocido por sus líneas angulares y puertas de tijera, que definieron la estética de los superdeportivos de los años 70 y 80.",
    img: "https://i.pinimg.com/236x/16/99/3d/16993dc65eb4cf50977332ddb488100b.jpg",
  },
  {
    id: 5,
    modelo: "Zonda R",
    fabricante: "Pagani",
    anio: 2000,
    descripcion:
      "El Pagani Zonda R es una obra maestra de la ingeniería automotriz, diseñado por el Argentino Horacio Pagani, con un rendimiento excepcional y una aerodinámica avanzada que lo convierten en uno de los superdeportivos más impresionantes del mundo.",
    img: "https://i.pinimg.com/236x/8d/d0/5e/8dd05ec33600c9fe7917cdd6c966b6fd.jpg",
  },
];

getAutos();

function getAutos(array = listaVehiculos) {
  cuerpoTabla.innerHTML = "";

  array.forEach((Vehiculo) => {
    let fila = document.createElement("tr");
    let celdas = `<td>${Vehiculo.modelo}</td>
                <td>${Vehiculo.fabricante}</td>
                <td>${Vehiculo.anio}</td>
                <td><img
            src="${Vehiculo.img}"
            alt="Foto de ${Vehiculo.modelo}"
            class="img-thumbnail micro-photo"
          />
          </td>
                <td><button class="btn btn-danger btn-sm" onclick="borrarCehiculo(${Vehiculo.id})"><i class="bi bi-x-lg"></i></button>
                
                <button class="btn btn-warning btn-sm" onclick="cargarDatos(${Vehiculo.id})"><i class="bi bi-pencil-square"></i></button>
                </td>`;
    fila.innerHTML = celdas;

    cuerpoTabla.append(fila);
  });
}

const agregarVehiculo = () => {
  let id = listaVehiculos.at(-1).id + 1;

  const datos = {
    id,
    modelo: inputModel.value,
    fabricante: inputBrand.value,
    anio: inputAnio.value,
    descripcion: inputDescripcion.value,
    img: inputPicture.value,
  };
  listaVehiculos.push(datos);
};

function borrarCehiculo(id) {
  // splice -> indice , 1
  let index = listaVehiculos.findIndex((Vehiculo) => Vehiculo.id === id);

  let validar = confirm(
    `Está seguro que quiere eliminar el Vehiculo ${listaVehiculos[index].modelo}?`
  );

  if (validar) {
    listaVehiculos.splice(index, 1);
    getAutos();
  }
}

//buscador
/*
datos de entrada: título del Vehiculo | algunos caracteres (3 mínimo)
proceso: Recorrer el array y comparar dato de entrada con el título de los libros (cualquier Vehiculo que incluya los caracteres)
salida: lista de libros que coincidan con la búsqueda - array[]

*/

function buscarVehiculo(
  termino = document.querySelector("#input-search").value
) {
  if (termino) {
    let VehiculoFiltrados = listaVehiculos.filter((Vehiculo) =>
      Vehiculo.modelo.toLowerCase().includes(termino.toLowerCase())
    );

    getAutos(VehiculoFiltrados);
  } else {
    getAutos();
  }
}

/*
1 - cargar los datos del Vehiculo en el formulario y cambiar el título del botón
2 - tomar los datos del formulario y actualizar el Vehiculo, cargar la tabla y volver a colocar el título al botón original
*/

function cargarDatos(id) {
  update = true; //indicamos que estamos por actualizar
  let datos = listaVehiculos.find((Vehiculo) => Vehiculo.id === id); //todo el objeto del Vehiculo a actualizar

  inputModel.value = datos.modelo;
  inputAnio.value = datos.anio;
  inputBrand.value = datos.fabricante;
  inputDescripcion.value = datos.descripcion;
  inputPicture.value = datos.img;

  // aqui actualizo la imagen de previsualización
  document.getElementById("preview-img").src = datos.img;

  idUpdate = id; //aquí guardo el id del Vehiculo
  document.querySelector(".btn-primary").innerText = "Actualizar Vehiculo";
}

function actualizarVehiculo(id, valores) {
  let index = listaVehiculos.findIndex((Vehiculo) => Vehiculo.id === id);

  listaVehiculos[index].modelo = valores.modelo;
  listaVehiculos[index].fabricante = valores.fabricante;
  listaVehiculos[index].anio = valores.anio;
  listaVehiculos[index].descripcion = valores.descripcion;
  listaVehiculos[index].img = valores.img;
  update = false;
  document.querySelector(".btn-primary").innerText = "Agregar Vehiculo";
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!update) {
    agregarVehiculo();
  } else {
    let valores = {
      modelo: inputModel.value,
      fabricante: inputBrand.value,
      anio: inputAnio.value,
      descripcion: inputDescripcion.value,
      img: inputPicture.value,
    };
    actualizarVehiculo(idUpdate, valores);
  }

  formulario.reset();
  inputModel.focus();
  getAutos();
});
