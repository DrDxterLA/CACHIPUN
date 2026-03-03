// Opciones posibles del juego
const opciones = ["piedra", "papel", "tijera"];

/**
 * Función principal del juego
 * @param {string} eleccionUsuario
 */
function jugar(eleccionUsuario) {

    // Genera un número aleatorio entre 0 y 2
    // Math.random() no es predecible
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);

    // Selección aleatoria de la consola
    const eleccionConsola = opciones[indiceAleatorio];

    // Mostrar elecciones en pantalla
    document.getElementById("usuario").textContent =
        "Usuario eligió: " + eleccionUsuario;

    document.getElementById("consola").textContent =
        "Consola eligió: " + eleccionConsola;

    // Variable para el resultado
    let resultado = "";

    // Lógica del juego
    if (eleccionUsuario === eleccionConsola) {
        resultado = "🤝 Empate";
    } else if (
        (eleccionUsuario === "piedra" && eleccionConsola === "tijera") ||
        (eleccionUsuario === "papel" && eleccionConsola === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionConsola === "papel")
    ) {
        resultado = "🎉 Ganaste";
    } else {
        resultado = "😢 Perdiste";
    }

    // Mostrar resultado final
    document.getElementById("resultado").textContent = resultado;
}
