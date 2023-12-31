var estudiante = {
    Nombre : '',
    Edad : '',
    Familia : '',
    Linaje: '',
    Casa: '',
    Animal: '',
    Cualidades: '',
    Profesores : {
        transformaciones: "Profesor Kevin Slughorn",
        herbologia: "Profesor Maria Umbridge",
        pociones: "Profesor Liliana McGonagall",
        encantamientos: "Profesora Jackie",
        defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
        animalesMagicos: "Profesor David Filch",
        historiaDeMagia: "Profesor Ronald Sprout"
    }
  }

function infoUser() {
    estudiante.Nombre = document.getElementById('nombre').value
    estudiante.Familia = document.getElementById('apellido').value
    estudiante.Edad = document.getElementById('edad').value
    return estudiante
}

function seleccionarCasa() {
    infoUser()
    console.log(estudiante)
    console.log("--------------", est)
    console.log(est.Nombre)
    var linaje = document.getElementById('linaje').value;
    var cualidades = document.getElementById('cualidades').value;
    var resultadoElemento = document.getElementById('resultado');
  
    if (linaje === 'sangre_pura') {
      if (cualidades === 'slytherin') {
          estudiante.Casa = 'slytherin';
          resultado = "¡Enhorabuena! Perteneces a Slytherin.";
      } else {
          resultado = "El Sombrero Seleccionador no ha podido decidir. ¡Quizás tienes cualidades de varias casas!";
      }
    } else if (cualidades === 'gryffindor') {
          estudiante.Casa = 'gryffindor';
          resultado = "¡Eres un Gryffindor valiente y audaz!";
    } else if (cualidades === 'hufflepuff') {
          estudiante.Casa = 'hufflepuff';
          resultado = "¡Bienvenido a Hufflepuff, donde la justicia y la lealtad son fundamentales!";
    } else if (cualidades === 'ravenclaw') {
          estudiante.Casa = 'ravenclaw';
          resultado = "¡Felicidades, eres un Ravenclaw inteligente y creativo!";
    } else {
          resultado = "El Sombrero Seleccionador no ha podido decidir. ¡Quizás tienes cualidades de varias casas!";
      }
  
    estudiante.Linaje = linaje;
    estudiante.Cualidades = cualidades;
    console.log(estudiante)
    resultadoElemento.textContent = resultado;
  }

// Cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
  // Muestra la ventana emergente cuando se hace clic en el botón Reproducir
  document.getElementById('playButton').addEventListener('click', function () {
      document.getElementById('videoModal').style.display = 'block';
  });

  // Cierra la ventana emergente cuando se hace clic en el botón de cierre
  document.getElementById('closeButton').addEventListener('click', function () {
      document.getElementById('videoModal').style.display = 'none';
      // Pausa el video al cerrar la ventana emergente (puedes ajustar esto según tu necesidad)
      document.getElementById('localVideo').pause();
  });

  // Cierra la ventana emergente si se hace clic fuera de ella
  window.addEventListener('click', function (e) {
      if (e.target.id === 'videoModal') {
          document.getElementById('videoModal').style.display = 'none';
          // Pausa el video al cerrar la ventana emergente (puedes ajustar esto según tu necesidad)
          document.getElementById('localVideo').pause();
      }
  });
});
