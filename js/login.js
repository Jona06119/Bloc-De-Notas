// Obtiene del almacenamiento del navegador el dato llamado "usuario"
const usuario = localStorage.getItem("usuario")

// Verifica si existe un usuario guardado
if (usuario) {
    // Si existe, redirige directamente a la página "buscar.html". Esto evita que el usuario vuelva a iniciar sesión
    window.location.href = "buscar.html"
}

// Obtiene el formulario del login usando su id "formulario-login"
const formulariologin = document.getElementById("formulario-login")

// Agrega un evento que se ejecuta cuando el formulario se envía
formulariologin.addEventListener("submit", (evento) => {

    // Evita que la página se recargue automáticamente al enviar el formulario
    evento.preventDefault()

    // Muestra en la consola del navegador información del formulario
    console.log(formulariologin)

    // Obtiene el valor escrito en el campo "nombre"
    const nombre = document.getElementById("nombre").value

    // Obtiene el valor escrito en el campo "password"
    const password = document.getElementById("password").value

    // Muestra el nombre en la consola para revisar lo que se escribió
    console.log(nombre)

    // Verifica si el usuario y la contraseña coinciden con los datos correctos
    if (nombre == "admin" && password == "1234") {

        // Guarda el nombre del usuario en el almacenamiento del navegador
        localStorage.setItem("usuario", nombre)

        // Redirige a la página "buscar.html"
        window.location.href = "buscar.html"

    } else {

        // Si los datos son incorrectos muestra un mensaje de error
        alert("Usuario o contraseña incorrectos")
    }
})