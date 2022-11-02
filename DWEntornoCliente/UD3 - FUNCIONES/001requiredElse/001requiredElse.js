/*001requiredElse.js/.html: ¿Es "else" requerido?
La siguiente función devuelve true si el parámetro age es mayor a 18. De lo contrario, 
solicita una confirmación y devuelve su resultado:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('¿Tus padres te permitieron?');
  }
}
¿Funcionará la función de manera diferente si se borra else? ¿Hay alguna diferencia en 
el comportamiento de estas dos variantes?*/
"use strict";

function checkAge(age) {
    if (age > 18) {
        return true;
    }

    return confirm("¿Tus padres te permitieron?");
}

/*
* Se ejecutará igual aunque el confirm esté fuera del else. Una vez ejecute el return dentro del if 
* saldría de la función, por tanto es indiferente que el confirm esté en un else o fuera del if.
*/
