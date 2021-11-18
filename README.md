# Clases del Curso de Complejidad Algorítmica con JavaScript

## Estructura de un algoritmo

Un algoritmo consiste en una secuencia de instrucciones que nos llevan a una solución,
los algoritmos están compuestos por 3 partes

- Entrada: la entra de datos

- Proceso: el proceso a realizar

- Salida: la salida de datos o el resultado del algoritmo (esta etapa es opcional)

## ¿Cómo elegir un buen algoritmo?

En programacion se caracteriza que muchos algoritmos diferentes son capaces de resolver el mismo problema.

Lo cual hace que debamos preguntarnos si estamos usando el mejor algoritmo

Para encontrar esto debemos considerar

**Tiempo del algoritmo**
¿Cuánto tiempo tarda el algoritmo en ejecutarse?
**Espacio del algoritmo**
¿Cuánto espacio en memoria ocupa el algoritmo (recursos de memoria ram y memoria en disco)?

Es comun que mejorar uno de estos aspectos empeora la performance del otro.

En el caso de JavaScript es un factor mucho mas importante en javascript ya que de por si estos programas suelen ocupar mucho espacio en memoria

La pregunta base de este curso es: **¿Cómo elegir un buen algoritmo?**

🔍 Para encontrar un buen algoritmo podemos ver qué tanto tarda en ejecutarse, o qué tanto espacio en la memoria ocupa.

⌚ En particular en JavaScript es más relevante apuntar al tiempo, que al espacio. Porque en el código JavaScript usualmente no corre en dispositivos con memoria muy limitada (como en dispositivos embebidos).

⚡ Esto no significa que no haya casos particulares, o que el espacio siempre sea menos importante que el tiempo, sólo es el ambiente del software con JavaScript.

## Introducción a complejidad algorítmica

### Recursos

- **Tiempo**
  Representado en milisengundo, segundos, minutos.

- **Espacio**
  representado en bytes, kilobytes, megabytes, etc...

### Medir los recursos

para obtener cuantos recursos utliza un algoritmo, **solo** medimos los recursos.

Vamos a tomar cuánto tiempo y cuánto espacio ocupa un algoritmo.

### Teoría de la complejidad

Es el estudio del consumo de recursos que un algoritmo ocupa.

**La complejidad se basa en el crecimiento**
En la complejidad queremos entender el crecimiento de recursos, no su tamaño.
El **crecimiento de recursos** importa.

✨ Empezamos el módulo de Complejidad Algorítmica.

🚗 Ok, ¿Cómo sabemos cuando un coche es más rápido que otro? Bueno, si los ponemos en un tramo igual, y tomamos nuestros relojes para medir cuánto tardan, podremos ver que uno llega más rápido que otro a la meta 🏁. Que un coche tarda menos que otro. Tal vez unos 10, o 20, o 30 minutos.

Entonces, medir es clave para determinar el mejor. Pero la Complejidad en sí no trata de si un coche llega 10, o 20 o 30 minutos más rápido a la meta. Si no del ritmo con el que aumenta. Esto lo veremos en todo el módulo de Complejidad.

## Complejidad temporal

La complejidad temporal es la tasa de crecimiento del tiempo de ejecución del algoritmo en relación con el crecimiento de la entrada de datos del algoritmo.

Para obtenerla se mide el tiempo de ejecucion del algoritmo en varios casos, cada caso con una mayor informacion de entrada que el anterior.

Se mide cuanto tiempo toma en ejecutarse el algoritmo conforme aumenta la entrada de datos. ya que buscamos medir el ritmo con el que aumenta el tiempo de ejecucion conforme aumente la entrada de datos.

Ejemplo dos algoritmos:

**El algoritmo A** le toma realizar la operacion
10 segundos con 10 datos
20 segundos con 20 datos
30 segundos con 30 datos
40 segundos con 40 datos

**El algoritmo B** le toma realizar la operacion
20 segundos con 10 datos
20 segundos con 20 datos
20 segundos con 30 datos
20 segundos con 40 datos

En este caso podemos ver que el algoritmo **B** tiene una mejor complejidad temporal ya que su tiempo de ejecucion se mantiene en el tiempo mientras que el algoritmo **A** tiene una taza de crecimiento lineal.

## Complejidad temporal en práctica

En javascript tenemos la **Interfaz performance**

El método **performance.now()** nos ayuda a **medir el tiempo** entre dos líneas de código en **milisegundos**

Existe otro método: **console.time()**, pero no es tan preciso como **performance.now()**

📈👉 [Herramienta de Visualización de Complejidad Temporal](https://radiant-anchorage-11930.herokuapp.com/)

[perf_hooks.html#perf_hooks_performance_now](https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_now)

[hr-time/#dom-performance-now](https://w3c.github.io/hr-time/#dom-performance-now)

## Complejidad espacial

Ejemplo buscando un algoritmo que ocupe poco espacio Teniendo multiples algoritmos:

**El algoritmo Vision** realiza la operación

Con 10 datos la realiza ocupando 10 Kilobytes
Con 20 datos la realiza ocupando 20 Kilobytes
Con 30 datos la realiza ocupando 30 Kilobytes

**El algoritmo Nova** realiza la operación

Con 10 datos la realiza ocupando 10 Kilobytes
Con 20 datos la realiza ocupando 100 Kilobytes
Con 30 datos la realiza ocupando 1000 Kilobytes

### Memoria

cuando trabajamos con grandes cantidades de datos tendremos que almacenar información en otras partes

### Espacio auxiliar

La complejidad espacial el **espacio auxiliar** y el espacio ocupado por los datos de entrada

es más importante que el espacio de entrada, ya que el espacio auxiliar es generado por las operaciones internas que realice nuestro algoritmo. Todos los algoritmos ocupan el mismo tamaño en su entrada, pero el espacio auxiliar varía según que lógica apliquemos en el algoritmo.

Por ejemplo, el espacio auxiliar Puede ser generado por algoritmos de ordenamiento al crear nuevas variables. O las técnicas que usemos para resolver el problema, las creaciones de listas y diccionarios en el algoritmo aumentan el espacio auxiliar utilizado por el algoritmo.

## Complejidad espacial en práctica

Una de las particulariadades la complejidad espacial, es que varia el espacio y la forma de medirlo segun el lenguage de programacion, por los interpretes o compiladores utilizados

¿Cómo medimos un recurso?
⌚ En Complejidad Temporal podemos usar funciones como performance.now y console.time para medir el tiempo en que se ejecuta un algoritmo.

🌌 En Complejidad Espacial es diferente. Cada compilador asigna un espacio distinto de memoria para almacenar números o palabras.

📦 La diversidad de tamaños y formas con las que el compilador almacena información es interesante, pero para el propósito que tenemos, podemos simplificarlo a contar cuántas variables se definen para almacenar arreglos, números o cadenas.

En la complejidad Espacial vamos contando las variables que se van creando y que tipos de variables son las que se están creando.

## El estado de la Complejidad

### Otras complejidades existen

- Accesos a la memoria
- Procesos parelelos
- Comparaciones
- Entre otras mas

### Complejidad en el futuro

Si descubrimos interesante optimizar el uso de un recurso en computación, allí tendremos un nuevo campo de estudio de complejidad

### ♾ Los recursos que se analizan en Ciencias de la Computación van más allá del tiempo y del espacio. No hay límite

🌀 ¿Necesitas que un algoritmo ejecute pocas funciones? Nueva complejidad. ¿Necesitas que un algoritmo no realice muchos arreglos? Nueva complejidad. ¿Necesitas un algoritmo que utilice la menor cantidad de otros algoritmos? Nueva complejidad.

🚀 ¿Sabes qué es lo más genial? Que en en las siguientes clases entenderás a evaluar algoritmos con Big-O, una notación que funciona para todos los tipos de complejidad que existen y que existirán. ¡Te veo allá!
