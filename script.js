const secciones = document.querySelectorAll(".seccion");
const botonSubir = document.getElementById("subir");

for (let i = 0; i < secciones.length; i++) {
  secciones[i].classList.add("oculto");
}

function revisarScroll() {
  for (let i = 0; i < secciones.length; i++) {
    if (secciones[i].getBoundingClientRect().top < window.innerHeight - 80) {
      secciones[i].classList.add("visible");
    }
  }

  if (window.scrollY > 400) {
    botonSubir.classList.add("mostrar");
  } else {
    botonSubir.classList.remove("mostrar");
  }
}

window.addEventListener("scroll", revisarScroll);
revisarScroll();

botonSubir.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
