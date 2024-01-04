Gryffindor = ["Valor", "fuerza", "audacia"]
Hufflepuff = ["Justicia", "Lealtad", "Paciencia"]
Ravenclaw = ["Creatividad", "Erudición", "Inteligencia"]
Slytherin = ["Ambición", "Determinació", "Astucia"]


// PASO 1, 2: OBJETO DE CLASE
const persona_Profesores = {
    Nombre : 'David',
    Edad : 18,
    Familia : '',
    Linaje: 'Mestizo',
    Casa: '',
    Animal: '',
    Cualidades: ["Ambición", "Determinació", "Astucia"],
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

// PASO 3 CENA DE BIENVENIDA (OBJETO): Casa a la que pertenece.
for (let i = 0; i < Gryffindor.length; i++) {
    if(persona_Profesores.Cualidades[i] == Gryffindor[i]){
        persona_Profesores.Casa = 'Gryffindor'
    }else if(persona_Profesores.Cualidades[i]){
        persona_Profesores.Casa = 'Hufflepuff'
    }else if(persona_Profesores.Cualidades[i]){
        persona_Profesores.Casa = 'Ravenclaw'
    }else if(persona_Profesores.Cualidades[i]){
        persona_Profesores.Casa = 'Slytherin'
    }else{
        persona_Profesores.Casa = ''
    }    
}

for (let j = 0; j < Linaje1.length; j++) {
    if(persona_Profesores.Linaje == Linaje1[j]){
        console.log("PUEDE ENTRAR  A LA CASA")
    }else if( persona_Profesores.Linaje == Linaje2[j]){
        console.log("PUEDE ENTRAR  A LA CASA")
    }else if(persona_Profesores.Linaje == Linaje3[j]){
        console.log("PUEDE ENTRAR  A LA CASA")
    }else if(persona_Profesores.Linaje == Linaje4[j]){
        console.log("PUEDE ENTRAR  A LA CASA")
    }else{
        console.log("NO PUEDE ENTRAR  A LA CASA")
    }    
}

console.log(persona_Profesores)

let boggart = {
    a : "rojo",
    b : "ñ",
    c : "grande",
    transformaciones : "monstruo_normal"
}

const claseTransformaciones = {
    profesor : '',
    horario : '',
    rastrear : false,
    realizarTransformacionRiddikulus (){
        var boggart_presente = true;
        if(boggart_presente == true){
            this.rastrear = true;
        }
    },
    enfrentarBoggart(boggart){
        return boggart.transformaciones = "silla"
    } 
}

console.log(claseTransformaciones.enfrentarBoggart(boggart))

const defensaContraLasArtesOscuras = {
    animal_patronus(){
        animal = ["murciélago","toro","gato","cabra","caballo","conejo","escorpión","serpiente"]
        const aleatorio = animal[Math.floor(Math.random() * animal.length)];
        return persona_Profesores.Animal = aleatorio;
    }

}
const myDeepCopy = {...persona_Profesores};
console.log(myDeepCopy)

function dementor(){
    if(persona_Profesores.Animal == '' && myDeepCopy.Animal == '' ){
        return "GANASTES, TIENE ANIMAL"
    }else{
        return "FUISTES A LA ENFERMERIA, NO TIENE ANIMAL"
    }
}


console.log(defensaContraLasArtesOscuras.animal_patronus())
console.log(persona_Profesores)
console.log(dementor())