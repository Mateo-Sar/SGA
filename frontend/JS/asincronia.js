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
let alumnoEditandoLegajo = null;
let alumnoEditar = null;
const btnCancelar = document.querySelector("#btnCancelar");
btnCancelar.style.display = "none";
const btnGuardar = document.querySelector("#btnGuardar");
const API_ALUMNOS = "http://localhost:3000/alumnos";
/*
async function cargarDatos() {
    const respuesta = await fetch("http://localhost:3000/alumnos");
    const alumnos = await respuesta.json();
    console.table(alumnos);
}

cargarDatos();
*/
formulario.addEventListener("submit",async function(event){
    event.preventDefault();

    const legajo = document.querySelector("#legajo").value.trim();
    const nombre = document.querySelector("#nombre").value.trim();
    const carrera = document.querySelector("#carrera").value.trim();
    const correo = document.querySelector("#correo").value.trim();

    if(legajo === ""||nombre === "" || carrera === "" || correo === ""){
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
    
    //POST
    if(alumnoEditandoLegajo === null)
    {
        const alumno ={
        legajo:Number(legajo),
        nombre:nombre,
        carrera:carrera,
        correo:correo
        }

        const respuesta = await fetch(API_ALUMNOS,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(alumno)
        });
        if(!respuesta.ok){
        mostratMensaje("No se pudo guardar el alumno","mje-error")
        return
        }
        mostratMensaje("Alumno guardado correctamente","mje-exito");
        
    }else{//PUT
        const datosActuales ={
            nombre:nombre,
            carrera:carrera,
            correo:correo
        }
   
       if(JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){
            mostratMensaje("No se realizaron cambios","mje-error");
            return;
       }
       const respuesta = await fetch(`${API_ALUMNOS}/${alumnoEditandoLegajo}`,{
        method:"PUT",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            carrera:carrera,
            correo:correo
        })
       });
       if(!respuesta.ok){
        mostratMensaje("No se pudo actualizar el alumno")
       }
        alumnoEditandoLegajo = null;
        alumnoEditar = null;
        btnGuardar.textContent = "Guardar Alumno";
        document.querySelector("#legajo").disabled = false;
        mostratMensaje("Alumno actualizado correctamente","mje-exito");
    }
    await actualizarListaAlumnos();
    formulario.reset();

});



async function obtenerAlumnos(){
    const respuesta = await fetch(API_ALUMNOS);
    const alumnos = await respuesta.json();
    return alumnos;
}

function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = "";
    for(const alumno of alumnos){
        listaAlumnos.innerHTML += `
        <tr>
            <td>${alumno.legajo}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
            <button class="btn-editar" data-legajo ="${alumno.legajo}"title="Editar alumno"><i class="fa-solid fa-pen"></i></button>
            <button class="btn-eliminar" data-legajo ="${alumno.legajo}"title="Eliminar alumno"><i class="fa-solid fa-trash"></i></button>
        </tr>
        `;
    }
}

async function eliminarAlumno(legajo){

    const respuesta = await fetch(`${API_ALUMNOS}/${legajo}`,{
        method:"DELETE"
    });

    if(!respuesta.ok){
        mostratMensaje("No se puedo eliminar el alumno","mje-error")
        return
    };


    if(alumnoEditandoLegajo === legajo){
        formulario.reset();
        alumnoEditandoLegajo = null;
        formulario.querySelector("button").textContent = "Guardar alumno";
        document.querySelector("#legajo").disabled = false;
        btnCancelar.style.display = "none";
    }
    mostratMensaje("Alumno eliminado correctamente","mje-exito");
    await actualizarListaAlumnos();
}

async function actualizarListaAlumnos() {
    const alumnos = await obtenerAlumnos();
    mostrarAlumnos(alumnos);
}

listaAlumnos.addEventListener("click",(e)=> {
    const  boton_el = e.target.closest(".btn-eliminar")

    if(boton_el){
        const legajo = Number(boton_el.dataset.legajo);
        const confirmar = confirm("Va a eliminar este alumno, Esta seguro?");
        if (confirmar){
            eliminarAlumno(legajo);
        }
    }
   const boton_ed =e.target.closest(".btn-editar")
    if(boton_ed){
        const legajo = Number(boton_ed.dataset.legajo);
        editarAlumno(legajo);
    }
})

async function editarAlumno(legajo){
    const alumnos = await obtenerAlumnos();
    const alumno = alumnos.find(alumno => alumno.legajo === legajo);

    if(!alumno){
        mostratMensaje("Alumno no encontrado","mje-error")
        return;
    }
    document.querySelector("#legajo").value = alumno.legajo;
    document.querySelector("#legajo").disabled = true;
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditar = {
        nombre:alumno.nombre,
        carrera:alumno.carrera,
        correo:alumno.correo
    }
    alumnoEditandoLegajo = legajo;
    btnCancelar.style.display = "inline-block";
    formulario.querySelector("button").textContent = "Actualizar Alumno";
    document.querySelector("#nombre").focus();


}

function cancelarEdicion(){
 formulario.reset();
 alumnoEditandoLegajo = null;
 alumnoEditar = null;
 btnGuardar.textContent = "Guardar alumno";
 document.querySelector("#legajo").disabled = false;
 btnCancelar.style.display = "none";
 document.querySelector("#nombre").focus();
}

btnCancelar.addEventListener("click",cancelarEdicion);

async function iniciar() {
    await actualizarListaAlumnos();
    
}

iniciar();

