function Consultorio(nombre, paciente) {
    var _nombre = nombre;
    var _paciente = paciente;

    Object.defineProperty(this, '_getNombre', {
        get: function() {
            return _nombre;
        }
    });

    Object.defineProperty(this, '_setNombre', {
        set: function(nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, '_getPaciente', {
        get: function() {
            return _paciente;
        }
    });

    Object.defineProperty(this, '_setPaciente', {
        set: function(paciente) {
            _paciente = paciente;
        }
    });
}

function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, '_getNombre', {
        get: function() {
            return _nombre;
        }
    });

    Object.defineProperty(this, '_setNombre', {
        set: function(nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, '_getEdad', {
        get: function() {
            return _edad;
        }
    });

    Object.defineProperty(this, '_setEdad', {
        set: function(edad) {
            _edad = edad;
        }
    });

    Object.defineProperty(this, '_getRut', {
        get: function() {
            return _rut;
        }
    });

    Object.defineProperty(this, '_setRut', {
        set: function(rut) {
            _rut = rut;
        }
    });

    Object.defineProperty(this, '_getDiagnostico', {
        get: function() {
            return _diagnostico;
        }
    });

    Object.defineProperty(this, '_setDiagnostico', {
        set: function(diagnostico) {
            _diagnostico = diagnostico;
        }
    });
}


console.clear()
let outputColor = "color:green; font-size:20px;"

//Definir las variables
var paciente1 = new Paciente("Juan", 30, "12.34.5678-9", "Dolor de cabeza");
var consultorio1 = new Consultorio("Consultorio A",paciente1);


console.log("%c Nombre Original Consultorio.",outputColor)
console.log("Nombre Consultorio           : " + consultorio1._getNombre); 

//modificar nombre consultorio
console.log("%c Nombre actualizado Consultorio.",outputColor)

consultorio1._setNombre = "Consultorio B";
console.log("Nuevo nombre del consultorio : " + consultorio1._getNombre); 

// Obtener y establecer propiedades del paciente
console.log("%c Datos Originales Paciente.",outputColor)
console.log("Paciente 1 Nombre            :" + paciente1._getNombre); 
console.log("Paciente 1 Edad              :" + paciente1._getEdad); 
console.log("Paciente 1 Rut               :" + paciente1._getRut); 
console.log("Paciente 1 Diagnostico       :" + paciente1._getDiagnostico); 

//Cambiar la Propiedades del Paciente
paciente1._setNombre = "Pedro";
paciente1._setEdad = 35;
paciente1._setRut = "98765432-1";
paciente1._setDiagnostico = "Fiebre";

// Obtener las nuevas propiedades del paciente
console.log("%c Datos Actualizados Paciente.",outputColor)
console.log("Paciente 1 Nuevo Nombre      :" + paciente1._getNombre); 
console.log("Paciente 1 Nuevo Edad        :" + paciente1._getEdad); 
console.log("Paciente 1 Nuevo Rut         :" + paciente1._getRut); 
console.log("Paciente 1 Nuevo Diagnostico :" + paciente1._getDiagnostico);