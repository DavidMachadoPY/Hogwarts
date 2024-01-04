// Cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Asigna el evento clic al botón Reproducir
    document.getElementById('playButton').addEventListener('click', mostrarVideoModal);

    // Asigna el evento clic al botón de cierre
    document.getElementById('closeButton').addEventListener('click', cerrarVideoModal);

    // Asigna el evento clic al área fuera del modal para cerrarlo
    window.addEventListener('click', cerrarModalExterno);
});

// Función para mostrar el modal de video
function mostrarVideoModal() {
    document.getElementById('videoModal').style.display = 'block';
}

// Función para cerrar el modal de video
function cerrarVideoModal() {
    document.getElementById('videoModal').style.display = 'none';
    // Pausa el video al cerrar la ventana emergente (ajústalo según tus necesidades)
    document.getElementById('localVideo').pause();
}

// Función para cerrar el modal de video si se hace clic fuera de él
function cerrarModalExterno(e) {
    if (e.target.id === 'videoModal') {
        cerrarVideoModal();
    }
}

// Definición del objeto estudiante
var estudiante = {
    Nombre: '',
    Edad: '',
    Familia: '',
    Linaje: '',
    Casa: '',
    Animal: '',
    Cualidades: [],
};

var clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
}

function infoUser() {
    estudiante.Nombre = document.getElementById('nombre').value;
    estudiante.Familia = document.getElementById('apellido').value;
    estudiante.Edad = document.getElementById('edad').value;
    console.log(estudiante)
    return estudiante;
}

function seleccionarCasa(casaSeleccionada) {
    const linaje = estudiante.Linaje;
    const resultadoElemento = document.getElementById('resultado');
    const miModal = document.getElementById("ModalCasa"); // Ahora apunta al ID "ModalCasa"


    let resultado = '';
    estudiante.Casa = '';
    
    switch (casaSeleccionada) {
      case 'gryffindor':
        estudiante.Cualidades = obtenerCualidadesPorCasa(casaSeleccionada);
        if (estudiante.Cualidades.includes('Valor') && estudiante.Cualidades.includes('Fuerza') && estudiante.Cualidades.includes('Audacia')) {
          estudiante.Casa = 'Gryffindor';
          resultado = '¡Eres un Gryffindor valiente y audaz!';
        } else {
          resultado = 'No cumples con las cualidades necesarias para Gryffindor.';
        }
        break;
  
      case 'hufflepuff':
        if (linaje === 'Mestizo' || linaje === 'Muggle') {
          estudiante.Linaje = linaje;
          estudiante.Cualidades = obtenerCualidadesPorCasa(casaSeleccionada);
          if (estudiante.Cualidades.includes('Justicia') && estudiante.Cualidades.includes('Lealtad') && estudiante.Cualidades.includes('Paciencia')) {
            estudiante.Casa = 'Hufflepuff';
            resultado = '¡Bienvenido a Hufflepuff, donde la justicia y la lealtad son fundamentales!';
          } else {
            resultado = 'No cumples con las cualidades necesarias para Hufflepuff.';
          }
        }
        break;
  
      case 'ravenclaw':
        estudiante.Linaje = linaje;
        estudiante.Cualidades = obtenerCualidadesPorCasa(casaSeleccionada);
        if (estudiante.Cualidades.includes('Creatividad') && estudiante.Cualidades.includes('Erudición') && estudiante.Cualidades.includes('Inteligencia')) {
          estudiante.Casa = 'Ravenclaw';
          resultado = '¡Felicidades, eres un Ravenclaw inteligente y creativo!';
        } else {
          resultado = 'No cumples con las cualidades necesarias para Ravenclaw.';
        }
        break;
  
      case 'slytherin':
        if (linaje === 'Sangre Pura') {
          estudiante.Linaje = linaje;
          estudiante.Cualidades = obtenerCualidadesPorCasa(casaSeleccionada);
          if (estudiante.Cualidades.includes('Ambición') && estudiante.Cualidades.includes('Determinación') && estudiante.Cualidades.includes('Astucia')) {
            estudiante.Casa = 'Slytherin';
            resultado = '¡Enhorabuena! Perteneces a Slytherin.';
          } else {
            resultado = 'No cumples con las cualidades necesarias para Slytherin.';
          }
        }
        break;
  
      default:
        resultado = 'El Sombrero Seleccionador no ha podido decidir. ¡Quizás tienes cualidades de varias casas!';
        break;
    
    }
    
    console.log(estudiante); // Puedes ver el objeto estudiante en la consola
    console.log(resultado);
    miModal.style.display = "block";
    resultadoElemento.textContent = resultado;
  }

  function cerrarModalC() {
    const miModal = document.getElementById("ModalCasa");
    miModal.style.display = "none";
  }

  window.onclick = function(event) {
    const miModal = document.getElementById("ModalCasa"); // Ahora apunta al ID "ModalCasa"
    if (event.target == miModal) {
      miModal.style.display = "none";
    }
  };
  
  function obtenerCualidadesPorCasa(casa) {
    switch (casa) {
      case 'gryffindor':
        return ['Valor', 'Fuerza', 'Audacia'];
      case 'hufflepuff':
        return ['Justicia', 'Lealtad', 'Paciencia'];
      case 'ravenclaw':
        return ['Creatividad', 'Erudición', 'Inteligencia'];
      case 'slytherin':
        return ['Ambición', 'Determinación', 'Astucia'];
      default:
        return [];
    }
  }

function seleccionarLinaje(linaje) {
    var linajeDiv = document.getElementById('linaje');
    var cualidadesDiv = document.getElementById('cualidades');
    estudiante.Linaje = linaje
    
    // Oculta el div de linajes
    linajeDiv.style.display = 'none';
    
    // Muestra el div de cualidades y aplica la animación de entrada
    cualidadesDiv.classList.remove('oculto');
    cualidadesDiv.style.display = 'flex';
    cualidadesDiv.classList.add('animacion-entrada');
}

function regresarPaso1() {
    var linajeDiv = document.getElementById('linaje');
    var cualidadesDiv = document.getElementById('cualidades');
    
    // Muestra el div de linajes
    linajeDiv.style.display = 'flex';
    
    // Oculta el div de cualidades y elimina la animación
    cualidadesDiv.style.display = 'none';
    cualidadesDiv.classList.remove('animacion-entrada');
}

function mostrarSeleccionClases() {
    // Limpiar el array de clases seleccionadas al inicio
    clasesSeleccionadas = [];

    // Obtener todos los checkboxes
    const checkboxes = document.querySelectorAll('input[name="drone"]');
    

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            // Obtener el título (h2) y el nombre del profesor (h3) de la clase seleccionada
            const tituloClase = document.querySelectorAll('.nameMateria')[index].innerText;
            const nombreProfesor = document.querySelectorAll('.nameTeacher')[index].innerText;
            
            // Agregar al array de clases seleccionadas
            clasesSeleccionadas.push({
                titulo: tituloClase,
                profesor: nombreProfesor
            });
        }
    });
    
    // Mostrar el modal solo si hay clases seleccionadas
    if (clasesSeleccionadas.length > 0) {
        mostrarModal();
    } else {
      console.log(' NO SELECCIONO NINGUAN CLASE')
    }
    
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false; // Desmarcar cada checkbox
    });

}

function mostrarModal() {
    const contenidoModal = document.getElementById('contenidoModal');

    if (contenidoModal) {
        clasesSeleccionadas.forEach((clase) => {
            const parrafo = document.createElement('p');
            parrafo.textContent = `Materia: ${clase.titulo}, Profesor: ${clase.profesor}`;
            contenidoModal.appendChild(parrafo);
        });
        const modal = document.getElementById('miModal');
        modal.style.display = 'block';

        var spanElement = document.querySelector('.closeModal2.oculto');
        spanElement.style.display = 'inline';

    } else {
        console.error('El elemento contenidoModal no fue encontrado.');
    }
}

function cerrarModal() {
  const modal = document.getElementById('miModal');
  modal.style.display = 'none';

  var spanElement = document.querySelector('.closeModal2');
  spanElement.style.display = 'none';
}

function limpiarModal() {
    const contenidoModal = document.getElementById('contenidoModal');
    
    // Eliminar todos los elementos hijos del contenedor modal
    while (contenidoModal.firstChild) {
        contenidoModal.removeChild(contenidoModal.firstChild);
    }

    // Reiniciar el array de clases seleccionadas
    clasesSeleccionadas = [];

    // Selecciona el elemento <span> por su clase existente
    var spanElement = document.querySelector('.closeModal2.oculto');

    // Asegúrate de que el span se oculte
    spanElement.style.display = 'none';
}
