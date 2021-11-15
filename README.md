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

Entonces, medir es clave para determinar el mejor. Pero la Complejidad en sí no trata de si un coche llega 10, o 20 o 30 minutos más rápido a la meta. Si no del ritmo con el que aumenta. Esto lo veremos en todo el módulo de Complejidad 