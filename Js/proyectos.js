const projects = [
    {
        id: 1,
        imagen: "./img/proyecto1.png",
        nombre: "Calculadora",
        descripcion: "Es una Calculadora basica, esta hecho con Html, Css y Javascrip. Espero que les guste",
        link_Deploy:"https://orlandperez.github.io/Calculadora/",
        link_repositorio: "https://github.com/Orlandperez/Calculadora"
    }
]

// Función para mostrar los productos en el HTML
function mostrarProyectos(projects) {
    const menuContainer = document.querySelector(".proyects-caja");
    projects.forEach(proyectos => {
        const proyectosDiv = document.createElement('div');
        proyectosDiv.classList.add('proyects-info');

        proyectosDiv.innerHTML = `
        <div>
          <img src="${proyectos.imagen}" alt="${proyectos.nombre}" />
        </div>
        <h2>${proyectos.nombre}</h2>
        <p>${proyectos.descripcion}</p>
        <a href="${proyectos.link_Deploy}" target="_blank">Deploy</a>
        <a href="${proyectos.link_repositorio}" target="_blank">GitHub</a>
      `;

        menuContainer.appendChild(proyectosDiv);
    });
}

// Llamada a la función con los productos
mostrarProyectos(projects);