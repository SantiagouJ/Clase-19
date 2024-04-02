const contenedor = document.querySelector("#cuadro");

contenedor.addEventListener("click", ()=>{
    alert("Se hace cick en el cuadro");
})

contenedor.addEventListener("mouseenter", ()=>{
    contenedor.classList.remove("contenedorDos");
    contenedor.classList.add("contenedor");
})
contenedor.addEventListener("mouseleave", ()=>{
    contenedor.classList.add("contenedorDos");
    contenedor.classList.remove("contenedor");
})