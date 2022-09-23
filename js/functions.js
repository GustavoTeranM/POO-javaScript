class sistemaEmpleados {
    //metodo constructor
    constructor() {
        this.emple = new Empleado();
    }

    dar_Edad(edad) {
        this.emple.edad(edad);
    }

    dar_Antiguedad() {
        return this.fecha_ingreso;
    }

    dar_Prestaciones() {
        return this.fecha_ingreso;
    }
}

class Empleado {
    constructor(nombre, apellido, sexo, fecha_nac, fecha_ingreso, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.fecha_nac;
        this.fecha_ingreso;
        this.salario = 0;
    }
    darNombre() {
        return (this.nombre = document.getElementById("nombre"));
    }

    darApellido() {
        return (this.apellido = document.getElementById("apellido"));
    }

    darSexo() {
        return this.sexo;
    }

    darFechana() {
        return (this.fecha_nac = document.getElementById("diaN").value);
    }

    darFechain() {
        return (this.fecha_ingreso = document.getElementById("diaI").value);
    }

    darSalario() {
        return this.salario;
    }
    modificarsalario(salario) {
        this.salario = this.salario;
    }
}

//creamos una instancia de sistemasEmpleados
let empleados = new Empleado();

function antiguedad() {
    let fecha_ingreso = empleados.darFechain();
    const fechaactual = new Date();
    const anoactual = parseInt(fechaactual.getFullYear());
    const mesactual = parseInt(fechaactual.getMonth());
    const diaactual = parseInt(fechaactual.getDate());

    //let dia = parseInt(String(fecha_ingreso).su(0, 4));
    let ano = parseInt(fecha_ingreso.substr(0, 4));
    let dia = parseInt(String(fecha_ingreso).substring(8, 10));
    let mes = parseInt(String(fecha_ingreso).substring(5, 7));

    let anti = anoactual - ano;
    if (mesactual < mes) {
        anti--;
    } else if (mesactual == mes) {
        if (diaactual < dia) {
            anti--;
        }
    }
    return anti;
    //document.getElementById("ed").innerHTML = anti;
}

function anti() {
    let a = antiguedad();
    alert(" su antiguedad es  " + a + " " + " Años");
}

function edad() {
    let fecha_ingreso = empleados.darFechana();
    const fechaactual = new Date();
    const anoactual = parseInt(fechaactual.getFullYear());
    const mesactual = parseInt(fechaactual.getMonth());
    const diaactual = parseInt(fechaactual.getDate());

    //let dia = parseInt(String(fecha_ingreso).su(0, 4));
    let ano = parseInt(fecha_ingreso.substr(0, 4));
    let dia = parseInt(String(fecha_ingreso).substring(8, 10));
    let mes = parseInt(String(fecha_ingreso).substring(5, 7));

    let anti = anoactual - ano;
    if (mesactual < mes) {
        anti--;
    } else if (mesactual == mes) {
        if (diaactual < dia) {
            anti--;
        }
    }

    alert(" su Edad es " + anti + " " + " Años");
    //document.getElementById("ed").innerHTML = anti;
}

function modificarsalario() {
    let cantidad = prompt("Ingrese el Salario ");
    let c = parseInt(cantidad);

    document.getElementById("salario1").innerHTML = c;
    //return cantidad;
}

function prestaciones() {
    //let pres = modificarsalario();
    let pres = parseInt(document.getElementById("salario1").innerHTML);
    let as = parseInt(antiguedad());
    let tot = parseFloat((as * pres) / 12);
    alert(" las prestaciones son  $" + tot + " ");
}

function horasextras() {
    let horas = parseInt(document.getElementById("horas").value);
    horas = horas * 20000;

    alert(" Su Cantidad Bonificacion en horas Extras es de $" + horas);
}

function trasporte() {
    let dias = parseInt(document.getElementById("trasporte").value);
    dias = dias * 15000;

    alert(" Su  Auxilio de Trasporte  es de $" + dias);
}