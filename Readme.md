# Evaluacion integradora de conceptos intermedios de JavaScript

## Instrucciones

### Pasos para Forkear y Clonar el Repositorio

1. Haz clic en el botón "Fork" en la parte superior derecha de esta página para copiar este repositorio a tu cuenta de GitHub.
2. En tu perfil de GitHub, navega hasta el repositorio que has forkeado.
3. Haz clic en el botón verde "Code" y copia la URL del repositorio.

### Pasos para Clonar el Repositorio en tu Máquina Local

4. Abre tu terminal o línea de comandos.
5. Navega hasta la carpeta en la que deseas clonar el repositorio usando el comando `cd ruta/del/directorio`.
6. Ejecuta el siguiente comando para clonar el repositorio en tu máquina local:

```bash
git clone URL_DEL_REPOSITORIO_COPIADA
```
### Pasos para Instalar las Dependencias
1. Navega a la carpeta del proyecto clonado:
```bash
cd evaluacion-JS-intermedio-1 
```
2. Instala las dependencias necesarias usando npm (Asegúrate de tener Node.js y npm instalados):
```bash
npm install
```

### Pasos para Ejecutar los Tests
1. Una vez que las dependencias se hayan instalado, ejecuta los tests utilizando Jest:
```bash
npm run test
```
  Esto ejecutará todos los tests en el proyecto y te mostrará los resultados.


Asegúrate de reemplazar `URL_DEL_REPOSITORIO_COPIADA` con la URL real del repositorio en GitHub. 


## Enunciados:

### **Lógica Condicional: Determinar si un número es positivo, negativo o cero**

Escribe una función llamada `determinarPosNegCero` que tome un número como argumento y devuelva un mensaje indicando si el número es positivo, negativo o cero. Si el número es mayor que cero, debe devolver "Positivo". Si el número es menor que cero, debe devolver "Negativo". Y si el número es igual a cero, debe devolver "Cero".

### **Switch: Elegir una bebida**

Crea una función llamada `elegirBebida` que tome una opción de bebida como argumento (por ejemplo: "agua", "jugo" o "refresco"). Utiliza una declaración `switch` para devolver un mensaje que indique la bebida elegida. Si la opción es "agua", el mensaje debe ser "Has elegido agua.". Si la opción es "jugo", el mensaje debe ser "Has elegido jugo.". Si la opción es "refresco", el mensaje debe ser "Has elegido refresco.". Si la opción no es ninguna de estas, el mensaje debe ser "Opción no válida.".

### **Switch: Elegir una fruta (sin default)**

Crea una función llamada `elegirFruta` que tome una fruta como argumento (por ejemplo: "manzana", "pera" o "naranja"). Utiliza una declaración `switch` para devolver un mensaje que indique la fruta elegida. Si la opción es "manzana", el mensaje debe ser "Has elegido una manzana.". Si la opción es "pera", el mensaje debe ser "Has elegido una pera.". Si la opción es "naranja", el mensaje debe ser "Has elegido una naranja.".

### **Arrays Multidimensionales: Multiplicar valores**

Escribe una función llamada `multiplicarValores` que tome un array multidimensional como argumento. Este array contiene tres sub-arrays, cada uno de ellos contiene valores numéricos. La función debe multiplicar cada valor en cada sub-array por 2 y devolver el array modificado.

### **Objetos: Crear, acceder y modificar un objeto**

Crea un objeto llamado `persona` con tres propiedades: `nombre`, `edad` y `profesion`. Luego, implementa una función llamada `manejarObjeto` que reciba el objeto `persona` como argumento. Dentro de la función, agrega una nueva propiedad `ciudad` con el valor "Madrid". Luego, modifica el valor de la propiedad `edad` para que sea 29. Finalmente, elimina la propiedad `profesion` del objeto y devuelve el objeto modificado.

### **Funciones: Crear una función para calcular la potencia de números**

Debes crear una función llamada potenciaNumeros que reciba dos valores como argumentos: la base y el exponente. Utiliza estructuras iterativas o condicionales para calcular la potencia de la base elevada al exponente y retorna el resultado de esa operación.