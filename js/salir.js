// Obtiene el botón del HTML que tiene el id btn-salir
const btnSalir = document.getElementById("btn-salir")
// Se agrega un evento al botón para detectar cuando el usuario hace clic
btnSalir.addEventListener("click",
    // Función que se ejecutará cuando se haga clic en el botón
    function () {//()=>{} también sería una forma corta de escribir la función
        // Elimina del almacenamiento local (localStorage) el dato llamado usuario. Esto normalmente se usa para cerrar sesión
        localStorage.removeItem("usuario")
        // Redirige al usuario a la página "index.html"
        // window.location.href sirve para cambiar de página
        window.location.href = "index.html"
    }
)