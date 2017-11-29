var Id = 0;

/* class Estudiantes{
	
	Estudiates(){
		var id=0;
		var nombre="";
		var matricula="";
		var identificacion="";
		var telefono="";
		var email="";
	};
	
} */

var Estudiantes2 = function(){
	var self=this;
	self.id = 0;
	self.nombre="";
	self.matricula="";
	self.identificacion="";
	self.telefono="";
	self.email="";
	
};

function agregarFila2(estudiante){
	var nuevoId= Id+1;
	var tabla = document.getElementById("datos");
	var fila = document.createElement("tr");
	var columna = 0;
	while(columna<= 5){
		var columnaAdd = document.createElement("td");	
		var txt;// = document.createTextNode("");
		columnaAdd.style.width = "20%";
		
		if (columna==0){
			txt = document.createTextNode(nuevoId);
			columnaAdd.style.width = "5%";
		}
		if (columna==1)
			txt=document.createTextNode(estudiante.nombre);			
		if (columna==2){
			txt =document.createTextNode(estudiante.matricula);
			columnaAdd.style.width = "15%";
		}
		if (columna==3)
			txt=document.createTextNode(estudiante.identificacion);			
		if (columna==4)
			txt = document.createTextNode(estudiante.telefono);
		if (columna==5)
			txt = document.createTextNode(estudiante.email); 		
			
		columna+=1;
		columnaAdd.appendChild(txt);
		fila.appendChild(columnaAdd)
	};	
	estudiante.id = nuevoId;
	Id+=1;
	tabla.appendChild(fila);
};


function agregarFila(estudiante){
	var nuevoId= Id+1;
	var tabla = document.getElementById("datosTabla");
	var fila = document.createElement("tr");
	var columnaId = document.createElement("th");
	var columnaNombre = document.createElement("td");
	var columnaMatricula = document.createElement("td");
	var columnaIdentificacion = document.createElement("td");
	var columnaTelefono = document.createElement("td");
	var columnaEmail = document.createElement("td");
	
	var txtId = document.createTextNode(nuevoId);
	var txtNombre = document.createTextNode(estudiante.nombre);
	var txtMatricula = document.createTextNode(estudiante.matricula);
	var txtIdentificacion = document.createTextNode(estudiante.identificacion);
	var txtTelefono = document.createTextNode(estudiante.telefono);
	var txtEmail = document.createTextNode(estudiante.email);
	
	estudiante.id = nuevoId;
	Id+=1;
	
	columnaId.style.width = "5%";
	columnaId.style.scope = "row";
	
	columnaNombre.style.width = "20%";
	columnaMatricula.style.width = "15%";
	columnaIdentificacion.style.width = "20%";
	columnaTelefono.style.width = "20%";
	columnaEmail.style.width = "20%";
	
	columnaId.appendChild(txtId);
	columnaNombre.appendChild(txtNombre);
	columnaMatricula.appendChild(txtMatricula);
	columnaIdentificacion.appendChild(txtIdentificacion);
	columnaTelefono.appendChild(txtTelefono);
	columnaEmail.appendChild(txtEmail);
	
	fila.appendChild(columnaId)
	fila.appendChild(columnaNombre)
	fila.appendChild(columnaMatricula)
	fila.appendChild(columnaIdentificacion)
	fila.appendChild(columnaTelefono)
	fila.appendChild(columnaEmail)
	
	tabla.appendChild(fila);
};

function almacenar(estudiante){
	//console.log(estudiante.nombre+"-"+estudiante.matricula+"-"+estudiante.identificacion+"-"+estudiante.telefono+"-"+estudiante.email);
	console.log(estudiante);
	agregarFila(estudiante);
	//agregarFila2(estudiante);
};

function registrar(e){
	//var id = document.getElementById("nombre");
	var nombre= document.getElementById("nombre").value;
	var matricula= document.getElementById("matricula").value;
	var identificacion= document.getElementById("identificacion").value;
	var telefono= document.getElementById("telefono").value;
	var email= document.getElementById("email").value;


	var estudiateRegistrar = new Estudiantes2();
	estudiateRegistrar.nombre = nombre;
	estudiateRegistrar.matricula = matricula;
	estudiateRegistrar.identificacion = identificacion;
	estudiateRegistrar.telefono= telefono;
	estudiateRegistrar.email= email;

	almacenar(estudiateRegistrar);
	limpiar();
	//estudiateRegistrar.almacenar(estudiateRegistrar);
	//Estudiantes2.almacenar(estudiateRegistrar);
	 
};

function limpiar(){
	var txtNombre = document.getElementById("nombre");
	txtNombre.value="";
	document.getElementById("matricula").value="";
	document.getElementById("identificacion").value="";
	document.getElementById("telefono").value="";
	document.getElementById("email").value="";	
	txtNombre.focus();
};

document.addEventListener("DOMContentLoaded", function(){
	var txtNombre = document.getElementById("nombre");
	txtNombre.focus();
});
