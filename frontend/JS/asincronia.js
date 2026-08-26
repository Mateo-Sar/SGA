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
/*
function obtenerAlumnos(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(["Ana","Jose","Maria"]) 
           console.log(["Ana","Jose","Maria"])
        }, 3000);
    })
}
    */
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

/*
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
*/

const listaAlumnos = document.querySelector("#listaAlumnos");
const formulario = document.querySelector("#formAlumno");
const mensaje = document.querySelector("#mensaje");
let alumnoEditandoId = null;
const alumnos = obtenerAlumno();
let alumnoEditar = null;
const btnCancelar = document.querySelector("#btn-cancelar");
btnCancelar.style.display = "none";
const btnGuardar = document.querySelector("#btnGuardar");



formulario.addEventListener("submit",function(event){
    event.preventDefault();

   
    const nombre = document.querySelector("#nombre").value.trim();
    const carrera = document.querySelector("#carrera").value.trim();
    const correo = document.querySelector("#correo").value.trim();

    if(nombre === "" || carrera === "" || correo === ""){
        mostratMensaje("Todos los campos son obligatorios","mje-error");
        return
    }

    if(!correo.includes("@")){
        mostratMensaje("Ingrese un correo electronico valido","mje-error");
        return;
    }

    if(nombre.length<3){
        mostratMensaje("El nombre debe tener al menos 3 caracteres", "mje-error");
        return;
    }
    

    if(alumnoEditandoId === null)
        {
        const alumno ={
        id:Date.now(),
        nombre:nombre,
        carrera:carrera,
        correo:correo
    }
    mostratMensaje("Alumno guardado correctamente","mje-exito");
    alumnos.push(alumno);
    }else{
        const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
        alumno.nombre = nombre;
        alumno.carrera = carrera;
        alumno.correo = correo;
        
        const datosActuales ={
            nombre:nombre,
            carrera:carrera,
            correo:correo
        }
       /* if(datosActuales.nombre === alumnoEditar.nombre && datosActuales.carrera === alumnoEditar.carrera && datosActuales.correo === alumnoEditar.correo){
            mostrarMensaje("No se realizaron cambios","mje-error");
            return;
        }*/
       if(JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){
            mostrarMensaje("No se realizaron cambios","mje-error");
            return;
       }
        alumnoEditandoId = null;
        alumnoEditar = null;

        alumnoEditandoId = null;
        btnGuardar.textContent = "Guardar Alumno";

        mostratMensaje("Alumno actualizado correctamente","mje-exito");
    }
    
    // localStorage.setItem("alumnos",JSON.stringify(alumnos));  borrar despues

    guardarDatos("alumnos",alumnos);

    mostrarAlumnos(alumnos);

    formulario.reset;


});



function obtenerAlumno(){
    return obtenerDatos("alumnos")
}

function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = "";
    for(const alumno of alumnos){
        listaAlumnos.innerHTML += `
        <tr>
            <td>${alumno.id}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
            <button class="btn-editar" data-id ="${alumno.id}"title="Editar alumno"><i class="fa-solid fa-pen"></i></button>
            <button class="btn-eliminar" data-id ="${alumno.id}"title="Eliminar alumno"><i class="fa-solid fa-trash"></i></button>
        </tr>
        `;
    }
}

function eliminarAlumno(id){
    const alumnos = obtenerAlumno();    
    const alumnosActualizados = alumnos.filter(
        alumno => alumno.id !== id
    );
    localStorage.setItem("alumnos",JSON.stringify(alumnosActualizados));
    mostrarAlumnos(alumnosActualizados);
    if(alumnoEditandoId === id){
        formulario.reset();
        alumnoEditandoId = null;
        formulario.querySelector("button").textContent = "Guardar alumno";
    }
    mostratMensaje("Alumno eliminado correctamente","mje-exito");
}

listaAlumnos.addEventListener("click",(e)=> {
    const  boton_el = e.target.closest(".btn-eliminar")

    if(boton_el){
        const id = Number(boton_el.dataset.id);
        const confirmar = confirm("Va a eliminar este alumno, Esta seguro?");
        if (confirmar){
            eliminarAlumno(id);
        }
    }
   const boton_ed =e.target.closest(".btn-editar")
    if(boton_ed){
        const id = Number(boton_ed.dataset.id);
        editarAlumno(id);
    }
})

function editarAlumno(id){
    const alumnos = obtenerAlumno();
    const alumno = alumnos.find(alumno => alumno.id === id);
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditar = {
        nombre:alumno.nombre,
        carrera:alumno.carrera,
        correo:alumno.correo
    }
    alumnoEditandoId = id;
    btnCancelar.style.display = "inline-block";
    formulario.querySelector("button").textContent = "Actualizar Alumno";
    document.querySelector("#nombre").focus();


}

function cancelarEdicion(){
 formulario.reset();
 alumnoEditandoId = null;
 alumnoEditar = null;
 btnGuardar.textContent = "Guardar alumno";
 btnCancelar.style.display = "none";
 document.querySelector("#nombre").focus();
}

btnCancelar.addEventListener("click",cancelarEdicion);
const alumno = obtenerAlumno();
mostrarAlumnos(alumno);



