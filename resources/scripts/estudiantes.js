var Id = 0;

var Estudiantes2 = function(){
	var self=this;
	self.id = 0;
	self.nombre="";
	self.matricula="";
	self.identificacion="";
	self.telefono="";
	self.email="";
	
};

function agregarFila(estudiante){
	var nuevoId= Id+1;
	estudiante.id = nuevoId;
	var txtAgregar = "<tr><td><input type='checkbox' class='form-check-input'></td><th scope='row'>"+estudiante.id+"</th><td>"+estudiante.nombre+"</td><td>"+estudiante.matricula+"</td><td>"+estudiante.identificacion+"</td><td>"+estudiante.telefono+"</td><td>"+estudiante.email+"</td></tr>"
	console.log(txtAgregar);
	$("#datosTabla").append(txtAgregar);
	
	Id+=1;
	
};

function almacenar(estudiante){
	console.log(estudiante);
	agregarFila(estudiante);
	guardarDb(estudiante);
};

function guardarDb(estudiante){
	var diccionario = window.localStorage;
	var estudiantes = [];
	
	var dbEstudiantes = diccionario.getItem("estudiantes");
	if (dbEstudiantes != null){
		estudiantes = JSON.parse(dbEstudiantes);
	}
	
	estudiantes.push(estudiante);
	diccionario.setItem("estudiantes",JSON.stringify(estudiantes));
};

function cargarEstudiantes(){
	var diccionario = window.localStorage;
	var estudiantes = [];
	
	var dbEstudiantes = diccionario.getItem("estudiantes");
	if (dbEstudiantes != null){
		estudiantes = JSON.parse(dbEstudiantes);
	}
	
	var mayor =-1;
	$.each(estudiantes, function(index,estudiante){
		var txtAgregar = "<tr><td><input type='checkbox' class='form-check-input'></td><th scope='row'></input>"+estudiante.id+"</th><td>"+estudiante.nombre+"</td><td>"+estudiante.matricula+"</td><td>"+estudiante.identificacion+"</td><td>"+estudiante.telefono+"</td><td>"+estudiante.email+"</td></tr>";
		$("#datosTabla").append(txtAgregar);
		if(estudiante.id>mayor){
			mayor=estudiante.id;			
		}
	});		
	if(mayor==-1){
		mayor=0;
	}
	
	Id=mayor;
	
};


function eliminarEstudiante(){
	var filas=[];
	var ids=[];
	$("#datosTabla > tr ").each(function (index, fila){
		if($("#datosTabla > tr:eq("+index+") td:eq(0) input:eq(0)").is(':checked')){
			filas.push(index);
			ids.push($("#datosTabla > tr:eq("+index+") th:eq(0)").html());
		}		
	});
	
	filas.sort(function(a, b){return b-a});
	var tamano = filas.length;
	
	for (i = 0; i < tamano; i++) {
		$("#datosTabla > tr:eq("+filas[i]+")").remove();
		eliminarDb(filas[i]);
	};	
};

function eliminarDb(index){
	var diccionario = window.localStorage;
	var estudiantes = [];
	
	var dbEstudiantes = diccionario.getItem("estudiantes");
	if (dbEstudiantes != null){
		estudiantes = JSON.parse(dbEstudiantes);
	}
	
	estudiantes.splice(index,1);
	diccionario.setItem("estudiantes",JSON.stringify(estudiantes));
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
