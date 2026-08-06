const alumnos = [
    {
        id:1,
        nombre:"Mateo"
    },
    {
        id:2,
        nombre:"Maria"
    },
    {
        id:3,
        nombre:"Juan"
    }
];

const materias = [
    {
        id:1,
        nombre:"Programacion"
    },
    {
        id:2,
        nombre:"Base de datos"
    },
    {
        id:3,
        nombre:"Ingles"
    }
];

const docentes = [
    {
        id:1,
        nombre:"Jose"
    },
    {
        id:2,
        nombre:"Eliana"
    },
    {
        id:3,
        nombre:"Augusto"
    }
];



function obtenerAlumnos(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(alumnos)
        }, 2000);
    })
}

async function iniciar(){
    const datos = await obtenerAlumnos();
    console.table(datos);
}

iniciar();

// Crear obtenerMaterias()
// crear obtenerDocentes()
//mostrar datos a traves de async/await

function obtenerMaterias(){
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve(materias) 
        }, 3000);
    })
}

async function mostrarMaterias() {
    const materias = await obtenerMaterias();
    console.table(materias);
}

mostrarMaterias();

function obtenerDocentes(){
    return new Promise((resolve) =>{
        setTimeout(() => {
           resolve(docentes) 
        }, 4000);
    })
}

async function mostrarDocentes() {
    const docentes = await obtenerDocentes();
    console.table(docentes);
}

mostrarDocentes();

