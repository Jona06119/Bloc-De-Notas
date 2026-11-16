// Obtiene del almacenamiento del navegador el usuario que inició sesión
const usuario = localStorage.getItem("usuario")

// Si no existe un usuario guardado, redirige a la página de inicio (login)
if (!usuario) window.location.href = "index.html"

// Obtiene todas las notas guardadas en el navegador o crea una lista vacía
let notas = JSON.parse(localStorage.getItem("notas")) || []

// Selecciona la lista (ul) del HTML donde se mostrarán las notas
const ul = document.querySelector("ul")

// Limpia el contenido de la lista para volver a cargar las notas
ul.innerHTML = ""

// Recorre todas las notas guardadas
notas.map(function (nota) {

    // Crea un nuevo elemento de lista (li) para cada nota
    const li = document.createElement("li")

    // Inserta dentro del li el contenido de la nota usando HTML
    li.innerHTML = `
      <div>
                    <h1>${nota.titulo}</h1> <!-- Muestra el título de la nota -->
                    <p>${nota.descripcion}</p> <!-- Muestra la descripción -->
                    <div>
                        <button onclick="eliminar(${nota.id})"> <!-- Botón para eliminar la nota -->
                            <i class="bi bi-trash-fill trash"></i> <!-- Icono de basura -->
                            <i class="bi bi-trash2 trash2"></i> <!-- Otro icono de basura -->
                        </button>
                    </div>
                </div>`

    // Cambia el color de fondo de la nota según el color guardado
    li.style.backgroundColor = nota.color

    // Agrega el elemento li dentro de la lista ul
    ul.appendChild(li)

    // Agrega un evento cuando se hace clic en la nota
    li.addEventListener("click", (evt) => {

        // Si el clic fue en el botón eliminar, no hace nada más
        if (evt.target.closest("button")) return

        // Guarda la nota seleccionada para editarla después
        localStorage.setItem("notaEditar", JSON.stringify(nota))

        // Redirige a la página donde se puede editar la nota
        window.location.href = "agregar.html"
    })
})

// Función para eliminar una nota
function eliminar(id) {

    // Filtra la lista de notas y elimina la que tenga el id seleccionado
    notas = notas.filter(nota => nota.id != id)

    // Guarda nuevamente la lista de notas actualizada
    localStorage.setItem("notas", JSON.stringify(notas))

    // Recarga la página de búsqueda para actualizar las notas
    window.location.href = "buscar.html"
}