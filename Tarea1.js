//Tarea1

let ObjetoEstudiante1 = {
    id:"78785327",
    nombre: 'Carlos Pineda',
    nota: 90,
    estado: "Aprobado",

}

let ObjetoEstudiante2 = {
    id:"89785327",
    nombre: 'Dennis Mora',
    nota: 70,
    estado: "Aprobado",
}

let ObjetoEstudiante3 = {
    id:"34785327",
    nombre: 'Marco Paz',
    nota: 55,
    estado: "Reprobado",
}

let arrayEst = [
     {
         id: '9595803', nombre: 'Pedro', nota: 89, estado: "Aprobado"
     },
     ObjetoEstudiante1
]

arrayEst.push(ObjetoEstudiante3)
arrayEst.push(50)

let resultadoFiltro = arrayEst.find(estudiante => estudiante.estado === 'Reprobado')

console.log(resultadoFiltro)