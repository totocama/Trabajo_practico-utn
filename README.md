# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Gestión de Jugadores – Guía del Trabajo

## Descripción general

Este proyecto consiste en una aplicación sencilla desarrollada en **JavaScript** cuyo objetivo es **gestionar una lista de jugadores**. Permite **agregar** y **eliminar jugadores**, trabajando con estructuras básicas del lenguaje y buenas prácticas de programación.

El trabajo fue pensado como ejercicio formativo para comprender:

* Uso de arrays
* Creación y uso de funciones
* Manejo de eventos
* Buenas prácticas de código (evitar errores de ESLint)

---

## Funcionalidades implementadas

### 1. Agregar jugador

Permite crear un jugador nuevo y agregarlo a una lista existente.

Conceptos trabajados:

* Funciones
* Manipulación de arrays (`push`)
* Validaciones básicas

Ejemplo conceptual:

```js
function agregarJugador(nombre) {
  jugadores.push(nombre);
}
```

---

### 2. Eliminar jugador

Permite eliminar un jugador previamente creado dentro de la lista.

Conceptos trabajados:

* Búsqueda dentro de arrays
* Uso de `filter` o `splice`
* Comparación de valores

Ejemplo conceptual usando `filter`:

```js
function eliminarJugador(nombre) {
  jugadores = jugadores.filter(jugador => jugador !== nombre);
}
```

Esta función recorre la lista y **devuelve un nuevo array sin el jugador indicado**.

---

## Errores comunes y soluciones

### 🔴 Error: `Parsing error: Unexpected token const`

**Causa:**

* El entorno no soporta `const` (JavaScript antiguo)
* Archivo mal configurado

**Solución:**

* Asegurarse de usar un entorno moderno (navegador actual)
* O reemplazar `const` por `var`

---

### 🔴 Warning: `'eliminarJugadorManual' is assigned a value but never used`

**Causa:**

* La función está creada pero **nunca se llama**

**Solución:**

* Llamar la función

```js
eliminarJugadorManual("Juan");
```

* O eliminarla si no se va a usar

---

## Estructura lógica del proyecto

1. Se define un array de jugadores
2. Se crean funciones para:

   * Agregar jugadores
   * Eliminar jugadores
3. Las funciones se ejecutan manualmente o mediante eventos

---

## Objetivo educativo

Este trabajo busca reforzar:

* Pensamiento computacional
* Lógica de programación
* Comprensión real del funcionamiento de JavaScript

Es una base sólida para proyectos más grandes como:

* Gestión de equipos
* Aplicaciones con formularios
* Sistemas CRUD simples

---

## Estado del proyecto

✅ Funcional
✅ Código entendible
✅ Buenas prácticas aplicadas

---

## Notas finales

Este README sirve como **guía de estudio y referencia futura** para recordar qué se hizo, cómo se hizo y por qué funciona.

Se recomienda conservarlo junto con el código del proyecto.
