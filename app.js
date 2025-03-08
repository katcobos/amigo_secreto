// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar un array para almacenar los nombres de los amigos
let amigos = [];

// Funcion para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Obtener el valor del input y eliminar espacios en blanco

    if (nombre) { // Verificar que el nombre no esté vacío
        amigos.push(nombre); // Agregar el nombre al array
        input.value = ''; // Limpiar el input
        mostrarAmigos(); // Llamar a la función para mostrar la lista actualizada
    } else {
        alert('Por favor, ingresa un nombre válido.'); // Mensaje de error si el input está vacío
    }
}

// Funcion para mostrar la lista de amigos en el DOM
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de mostrarla

    amigos.forEach((amigo) => {
        const li = document.createElement('li'); // Crear un nuevo elemento de lista
        li.textContent = amigo; // Establecer el texto del elemento
        listaAmigos.appendChild(li); // Agregar el elemento a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para sortear.'); // Mensaje de error si no hay suficientes amigos
        return;
    }

    const resultados = [];
    const amigosSorteados = [...amigos]; // Hacer una copia del array de amigos

    amigos.forEach((amigo) => {
        let indiceAleatorio;
        do {
            indiceAleatorio = Math.floor(Math.random() * amigosSorteados.length); // Generar un indice aleatorio
        } while (amigosSorteados[indiceAleatorio] === amigo); // Asegurarse de que no se sortee a si mismo

        resultados.push(`${amigo}) -> ${amigosSorteados[indiceAleatorio]}`); // Guardar el resultado
        amigosSorteados.splice(indiceAleatorio, 1); // Eliminar el amigo sorteado de la lista
    });

    mostrarResultados(resultados); // Mostrar los resultados
}

// Funcion para mostrar los resultados en el DOM
