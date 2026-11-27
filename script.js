const secciones = document.querySelectorAll(".seccion");
const botonSubir = document.getElementById("subir");

// Al inicio, las secciones están ocultas
for (let i = 0; i < secciones.length; i++) {
  secciones[i].classList.add("oculto");
}

// Cada vez que se hace scroll...
function revisarScroll() {
  // 1. Mostrar las secciones que ya llegaron a la pantalla
  for (let i = 0; i < secciones.length; i++) {
    if (secciones[i].getBoundingClientRect().top < window.innerHeight - 80) {
      secciones[i].classList.add("visible");
    }
  }

  // 2. Mostrar el botón de subir si se bajó un poco
  if (window.scrollY > 400) {
    botonSubir.classList.add("mostrar");
  } else {
    botonSubir.classList.remove("mostrar");
  }
}

window.addEventListener("scroll", revisarScroll);
revisarScroll(); // también al cargar la página

// Al hacer clic en el botón, volver arriba
botonSubir.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
