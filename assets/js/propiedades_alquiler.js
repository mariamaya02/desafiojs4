const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    baños: "2 Baños",
    precio: "2.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    img: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3 Habitaciones",
    baños: "3 Baños",
    precio: "2.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    baños: "2 Baños",
    precio: "2.200",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    img: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2 Habitaciones",
    baños: "1 Baños",
    precio: "1.200",
    smoke: true,
    pets: true,
  },
];

const mostrarPropiedadesAlquiler =
  document.getElementById("propiedad-alquiler");
let html = "";
for (let propiedad_alquiler of propiedades_alquiler) {
  html += `<div class="col-md-4 mb-4">
    <div class="card">
    <img src="${
      propiedad_alquiler.img
    }" class="card-img-top" alt="Imagen del departamento"/>
      <div class="card-body">
        <h5 class="card-title">${propiedad_alquiler.nombre}</h5>
        <p class="card-text">${propiedad_alquiler.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane, Prestige Suburb, CA 45678
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad_alquiler.habitaciones}
          <i class="fas fa-bath"></i> ${propiedad_alquiler.baños}
        </p>
        <p><i class="fas fa-dollar-sign"></i>${propiedad_alquiler.precio}</p>
        <p class="${propiedad_alquiler.smoke ? "text-success" : "text-danger"}">
          <i class="fas ${
            propiedad_alquiler.smoke ? "fa-smoking" : "fa-smoking-ban"
          }"></i> ${
    propiedad_alquiler.smoke ? "Está permitido fumar" : "No se permite fumar"
  }
        </p>
        <p class="${propiedad_alquiler.pets ? "text-success" : "text-danger"}">
          <i class="fa-solid ${
            propiedad_alquiler.pets ? "fa-paw" : "fa-ban"
          }"></i> ${
    propiedad_alquiler.pets ? "Mascotas permitidas" : "No se permiten mascotas"
  }
        </p>
      </div>
    </div>
    </div>`;
}
mostrarPropiedadesAlquiler.innerHTML = html;
