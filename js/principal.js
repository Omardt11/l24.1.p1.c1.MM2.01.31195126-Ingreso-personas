/*Dado el nombre, sexo (F-M) y el ingreso de varias personas.
Determinar e imprimir: promedio de ingreso de las mujeres y
el monto de ingreso mayor y quien lo tiene.
Se dispone de los siguientes datos de varias personas: (nombre, sexo, ingreso),
(Mary, F,150), (José, M, 135), (Carlos, M, 160), (Pedro, M, 75),
(Rosa, F, 120), (Carmen, F, 120)

Promedio de ingreso de las mujeres: 130
Nombre de la persona con mayor ingreso: Mary con un ingreso de 150$ */

import Cl_Personas from "./personas.js";
import Cl_procesar_personas from "./procesar personas.js";

let persona1 = new Cl_Personas("Mary", "F",150);
let persona2 = new Cl_Personas("José", "M", 135);
let persona3 = new Cl_Personas("Carlos", "M", 160);
let persona4 = new Cl_Personas("Pedro", "M", 75);
let persona5 = new Cl_Personas("Rosa", "F", 120);
let persona6 = new Cl_Personas("Carmen", "F", 120);

let procpersona = new Cl_procesar_personas();

procpersona.procesar(persona1);
procpersona.procesar(persona2);
procpersona.procesar(persona3);
procpersona.procesar(persona4);
procpersona.procesar(persona5);
procpersona.procesar(persona6);

let salida = document.getElementById("salida");

salida.innerHTML="Promedio de ingreso de las mujeres: "+procpersona.promedioingresomujeres();
salida.innerHTML+="<br> Nombre de la persona con mayor ingreso: "+ procpersona.nombremayoringreso+" con un ingreso de "+ procpersona.mayoringreso+"$";
