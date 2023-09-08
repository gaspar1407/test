/* Actividad N°1
  Escribe una función llamada `determinarPosNegCero` que tome un número como argumento y devuelva un mensaje indicando si el número es positivo, negativo o cero.
  Si el número es mayor que cero, debe devolver "Positivo". Si el número es menor que cero, debe devolver "Negativo".
  Y si el número es igual a cero, debe devolver "Cero".
*/
function determinarPosNegCero(num) {
  if (num > 0) {
    return "Positivo";
  } else if (num < 0) {
    return "Negativo";
  } else {
    return "Cero";
  }
}

/* Actividad N°2
  Crea una función llamada `elegirBebida` que tome una opción de bebida como argumento (por ejemplo: "agua", "jugo" o "refresco").
  Utiliza una declaración `switch` para devolver un mensaje que indique la bebida elegida.
  Si la opción es "agua", el mensaje debe ser "Has elegido agua.".
  Si la opción es "jugo", el mensaje debe ser "Has elegido jugo.".
  Si la opción es "refresco", el mensaje debe ser "Has elegido refresco.".
  Si la opción no es ninguna de estas, el mensaje debe ser "Opción no válida.".
*/
function elegirBebida(bebida) {
  switch (bebida) {
    case "agua":
      return "Has elegido agua.";
    case "jugo":
      return "Has elegido jugo.";
    case "refresco":
      return "Has elegido refresco.";
    default:
      return "Opción no válida.";
  }
}

/* Actividad N°3
  Crea una función llamada `elegirFruta` que tome una fruta como argumento (por ejemplo: "manzana", "pera" o "naranja").
  Utiliza una declaración `switch` para devolver un mensaje que indique la fruta elegida.
  Si la opción es "manzana", el mensaje debe ser "Has elegido una manzana.".
  Si la opción es "pera", el mensaje debe ser "Has elegido una pera.".
  Si la opción es "naranja", el mensaje debe ser "Has elegido una naranja.".
*/
function elegirFruta(fruta) {
  switch (fruta) {
    case "manzana":
      return "Has elegido una manzana.";
    case "pera":
      return "Has elegido una pera.";
    case "naranja":
      return "Has elegido una naranj.";
    default:
      return "No elegiste ni manzana, ni pera ni tampoco naranja";
  }
}

/* Actividad N°4
  Escribe una función llamada `multiplicarValores` que tome un array multidimensional como argumento.
  Este array contiene tres sub-arrays, cada uno de ellos contiene valores numéricos.
  La función debe multiplicar cada valor en cada sub-array por 2 y devolver el array modificado.
*/

function multiplicarValores(array) {
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    const subArray = [];

    for (let j = 0; j < array[i].length; j++) {
      subArray.push(array[i][j] * 2);
    }

    resultado.push(subArray);
  }

  return resultado;
}

/* Actividad N°5
  Crea un objeto llamado `persona` con tres propiedades: `nombre`, `edad` y `profesion`.
  Luego, implementa una función llamada `manejarObjeto` que reciba el objeto `persona` como argumento.
  Dentro de la función, agrega una nueva propiedad `ciudad` con el valor "Madrid".
  Luego, modifica el valor de la propiedad `edad` para que sea 29.
  Finalmente, elimina la propiedad `profesion` del objeto y devuelve el objeto modificado.
*/

const persona = {
  nombre: "gaspar",
  edad: 27,
  profesion: "full-stack dev",
};

function manejarObjeto(persona) {
  persona.ciudad = "Madrid";
  persona.edad = 29;
  delete persona.profesion;
  return persona;
}

/* Actividad N°6
  Crea una función llamada potenciaNumeros que reciba dos números como argumentos: la base y el exponente.
  Debes implementar la lógica necesaria para calcular la potencia de la base elevada al exponente.
  Luego, retorna el resultado de esta operación.

  🚨🚨 IMPORTANTE!!!!
      LA VARIABLE potenciaNumeros DEBE SER LA FUNCION A DECLARAR!!!!
      DEBE MANTENER EL NOMBRE PERO DEBE SER UNA FUNCION

  🚧🚧 Si no estás familiarizado con la potencia
  recuerda que elevar una base a un exponente significa multiplicar la base por sí misma el número de veces indicado por el exponente.
  Por ejemplo, 2 elevado a la 3 (2^3) es igual a 2 * 2 * 2 = 8.
  🚧🚧


*/

function potenciaNumeros(base, exponente) {
  return base ** exponente;
}

// ❌NO ELIMINAR NI MODIFICAR NADA DEBAJO DE ESTA LINEA❌
module.exports = {
  determinarPosNegCero,
  elegirBebida,
  elegirFruta,
  manejarObjeto,
  multiplicarValores,
  potenciaNumeros,
};
