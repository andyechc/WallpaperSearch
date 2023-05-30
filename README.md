# Wallpaper Search App 🖼️

Esta es una aplicación web construida con React⚛️ que permite a los usuarios buscar fondos de pantalla. La aplicación utiliza la potencia de los hooks `useState` y `useEffect` de React para gestionar el estado y realizar la obtención de datos de la API de Unsplash 📸. También utiliza hooks personalizados e implementa el manejo de errores. 😊

## Características 🌟

- Buscar fondos de pantalla por palabras clave o categorías.
- Mostrar los resultados de búsqueda en una forma visualmente atractiva.
- Hacer clic en un fondo de pantalla para verlo en tamaño completo.
- Manejo de errores para solicitudes fallidas a la API.

## Tech Stack 🚀

- React
- HTML
- CSS
- JavaScript

## Integración con la API de Unsplash 🌌

La aplicación se integra con la API de Unsplash para obtener los datos de los fondos de pantalla. Los puntos finales de la API se acceden utilizando la función `fetch` dentro del hook `useEffect`. Los datos obtenidos se almacenan en el estado del componente utilizando el hook `useState`, lo que permite actualizaciones dinámicas de la interfaz de usuario.

## Manejo de Errores 🚦

La aplicación incorpora el manejo de errores para gestionar solicitudes fallidas a la API. Si ocurre un error durante el proceso de obtención de datos, se muestra un mensaje de error apropiado al usuario. Esto se logra utilizando el bloque `try-catch` dentro del hook `useEffect` y actualizando el estado de error en consecuencia.

## Hooks Personalizados 🎣

Además de utilizar los hooks integrados como `useState` y `useEffect`, la aplicación también implementa hooks personalizados para encapsular y reutilizar funcionalidades específicas. Estos hooks personalizados mejoran la organización del código y hacen que la base de código sea más mantenible y modular.

## Contribuciones 🤝

¡Las contribuciones a este proyecto son bienvenidas! Si encuentras algún error o tienes sugerencias para mejoras, no dudes en abrir un issue o enviar un pull request.

## Reconocimientos 💙

- Los creadores de React y la increíble comunidad de React.
- Los desarrolladores de la API de Unsplash por proporcionar imágenes impresionantes.


