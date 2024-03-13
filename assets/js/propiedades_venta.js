const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    img: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones",
    baños: "4 Baños",
    precio: "5.000",
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
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    img: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 Habitaciones",
    baños: "3 Baños",
    precio: "4.500",
    smoke: false,
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
];

const mostrarPropiedadesVenta = document.getElementById("propiedad-venta");
let html = "";

for (let propiedad_venta of propiedades_venta) {
  html += `<div class="col-md-4 mb-4">
  <div class="card">
  <img src="${
    propiedad_venta.img
  }" class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
      <h5 class="card-title">${propiedad_venta.nombre}</h5>
      <p class="card-text">${propiedad_venta.descripcion}</p>
      <p>
        <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane, Prestige Suburb, CA 45678
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad_venta.habitaciones}
        <i class="fas fa-bath"></i> ${propiedad_venta.baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i>${propiedad_venta.precio}</p>
      <p class="${propiedad_venta.smoke ? "text-success" : "text-danger"}">
        <i class="fas ${
          propiedad_venta.smoke ? "fa-smoking" : "fa-smoking-ban"
        }"></i> ${
    propiedad_venta.smoke ? "Está permitido fumar" : "No se permite fumar"
  }
      </p>
      <p class="${propiedad_venta.pets ? "text-success" : "text-danger"}">
        <i class="fa-solid ${
          propiedad_venta.pets ? "fa-paw" : "fa-ban"
        }"></i> ${
    propiedad_venta.pets ? "Mascotas permitidas" : "No se permiten mascotas"
  }
      </p>
    </div>
  </div>
  </div>`;
}
mostrarPropiedadesVenta.innerHTML = html;
