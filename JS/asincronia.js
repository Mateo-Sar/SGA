/*
console.log("Inicio");
setTimeout(()=>{
    console.log("Buscando alumnos...");
},3000);
console.log("Fin");

function saludar(){
    console.log("Hola");
}

function ejecutar(funcion){
    funcion();
}

ejecutar(saludar);

function despedirse(){
    console.log("Hasta luego")
}

setTimeout(despedirse,3000);

setTimeout(() => {
    console.log("Buscando docentes...");
}, 2000);

setTimeout(() => {
    console.log("Buscando materias...");
}, 4000);

setTimeout(() => {
    console.log("Buscando cursos");
}, 1000);

console.log("Abriendo SGA");

setTimeout(() => {
   console.log("Alumnos cargados") 
}, 3000);

console.log("El usuario puede seguir navegando");
*/
/*
console.log("solicitando lista de alumnos...");

setTimeout(() => {
   console.log("Mientras tanto el programa sigue ejecutandose"); 
}, 1500);

setTimeout(() => {
    console.log("Lista recibida!");
}, 5000);*/

function obtenerAlumnos(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(["Ana","Jose","Maria"]) 
           console.log(["Ana","Jose","Maria"])
        }, 3000);
    })
}
/*
obtenerAlumnos().then((alumnos) =>{
    console.log(alumnos);
})
*/
/*

async function iniciar() {
    const alumnos = await obtenerAlumnos()
    console.log(alumnos);
}

iniciar();

function obtenerClima(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve("22°C - soleado") 
        }, 2000);
    })
}

// con then()

obtenerClima().then((clima) =>{
    console.log(clima);
});

async function mostratClima() {
    const clima = await obtenerClima();
    console.log(clima);
    
}

mostratClima();

function consultarSaldo(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(125000) 
        }, 4000);
    })
}

async function mostrarSaldo() {
    const saldo = await consultarSaldo();
    console.log(`Su saldo es: ${saldo}`);
}

mostrarSaldo();

function iniciarSesion(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve("Bienvenido, Steo"); 
        }, 5000);
    })
}

async function saludo(){
    const mensaje = await iniciarSesion();
    console.log(mensaje);
}

saludo();

function obtenerUsuario(){
    return new Promise((resolve) =>{
        setTimeout(() => {
           resolve({
            id:1,
            nombre:"Mateo",
            edad:26
           }) 
        }, 5000);
    })
}

async function mostrarUsuario() {
    console.log("Consultando usuario....");
    const usuario = await obtenerUsuario();
    console.log(usuario);
}

mostrarUsuario();
*/


async function obtenerAlumnos(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const alumnos = await respuesta.json();
   // console.table(alumnos);
    return alumnos;
}



function mostrarAlumnos(alumnos){
    console.table(alumnos);
   // console.log(alumnos[5])

    for(const alumno of alumnos){
        console.log(alumno.id,alumno.name, alumno.email);
    }
}

async function iniciar() {
    const alumnos = await obtenerAlumnos()
    mostrarAlumnos(alumnos);
}

iniciar();

// /post
// /coments
// Solo ID,titulo,usuario

async function obtenerPosts() {
    const obtenerPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await obtenerPosts.json();
    return post;


}



async function cargarPost(post) {

    for(const num of post){
        console.log("ID: "+num.id,"Titulo: "+num.title,"Cuerpo: "+num.body);
    }
}

async function mostrarPost(params){
    const post = await obtenerPosts();
    cargarPost(post);
}

mostrarPost();

async function ObtenerComentarios(){
    const contenido = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comentarios = contenido.json();
    return comentarios;
}

async function cargarComentarios(coments){
    for(const comentarios of coments){
        console.log(comentarios.id,comentarios.name,comentarios.email)
    }
}

async function mostrarComentarios() {
    const comentarios = await ObtenerComentarios();
    cargarComentarios(comentarios);
}

mostrarComentarios();
