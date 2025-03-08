// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar un array para almacenar los nombres de los amigos
let amigos = [];

// Funcion para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Obtener el valor del input y eliminar espacios en blanco

    if (nombre === '') { // Validar la entrada
        alert('Por favor, inserte un nombre.'); // Mensaje de error si el input está vacío
        return; // Salir de la función si la validación falla
    }

    amigos.push(nombre); // Actualizar el array de amigos
    input.value = ''; // Limpiar el campo de entrada
    mostrarAmigos(); // Llamar a la función para mostrar la lista actualizada
}

// Funcion para mostrar la lista de amigos en el DOM
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtener el elemento de la lista
    listaAmigos.innerHTML = ''; // Limpiar la lista existente

    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // Crear un nuevo elemento de lista
        li.textContent = amigos[i]; // Establecer el texto del elemento
        listaAmigos.appendChild(li); // Agregar el elemento a la lista
    };
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
function mostrarResultados(resultados) {
    const listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = ''; // Limpiar la lista de resultados

    resultados.forEach((resultado) => {
        const li = document.createElement('li'); // Crear un nuevo elemento de lista
        li.textContent = resultado; // Establecer el texto del elemento
        listaResultados.appendChild(li); // Agregar el elemento a la lista
    });
}