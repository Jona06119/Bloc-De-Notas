// Obtiene del almacenamiento del navegador el usuario guardado
const usuario = localStorage.getItem("usuario")

// Si NO existe un usuario guardado
if (!usuario) {
    // Redirige a la página de inicio (login)
    window.location.href = "index.html"
}

// Selecciona el formulario que existe en la página
const formulario = document.querySelector("form")

// Obtiene del almacenamiento una nota que se quiere editar y la convierte a objeto
const notaEditar = JSON.parse(localStorage.getItem("notaEditar"))

// Si existe una nota para editar
if (notaEditar) { //si existe en localStorage

    // Coloca el título de la nota en el campo de título del formulario
    document.getElementById("titulo").value = notaEditar.titulo

    // Coloca la descripción de la nota en el campo de descripción
    document.getElementById("descripcion").value = notaEditar.descripcion

    // Coloca la fecha de la nota en el campo de fecha
    document.getElementById("fecha").value = notaEditar.fecha

    // Coloca el color de la nota en el campo de color
    document.getElementById("color").value = notaEditar.color
}

// Agrega un evento que se ejecuta cuando se envía el formulario
formulario.addEventListener("submit", (evt) => {

    // Evita que la página se recargue automáticamente
    evt.preventDefault()

    // Obtiene el valor escrito en el campo título
    const titulo = document.getElementById("titulo").value

    // Obtiene la fecha escrita
    const fecha = document.getElementById("fecha").value

    // Obtiene la descripción escrita
    const descripcion = document.getElementById("descripcion").value

    // Obtiene el color seleccionado
    const color = document.getElementById("color").value

    // Crea un nuevo objeto con los datos de la nota
    const nuevaNota = {
        titulo,
        fecha,
        descripcion,
        color,
        id: Date.now() // crea un identificador único usando la fecha actual
    }

    // Obtiene todas las notas guardadas en el navegador o crea un arreglo vacío
    let notas = JSON.parse(localStorage.getItem("notas")) || []

    // Verifica si se está editando una nota
    if (notaEditar) {

        // Recorre todas las notas para encontrar la que se va a editar
        notas = notas.map((nota) => {

            // Si encuentra la nota con el mismo id
            if (nota.id == notaEditar.id) {

                // Reemplaza la nota vieja con la nueva información
                nota = {
                    ...nuevaNota,
                    id: notaEditar.id
                }
            }

            // Regresa la nota (editada o sin cambios)
            return nota
        })

        // Elimina del almacenamiento la nota que se estaba editando
        localStorage.removeItem("notaEditar")

    } else {

        // Si no se está editando, significa que se está creando una nueva nota
        notas.push(nuevaNota)
    }

    // Guarda todas las notas nuevamente en el navegador
    localStorage.setItem("notas", JSON.stringify(notas))

    // Redirige a la página donde se muestran las notas
    window.location.href = "buscar.html"
})