// Selecciona el elemento HTML con la clase "btn" y lo almacena en la variable 'btn'.
const btn = document.querySelector(".btn");

// Selecciona el elemento HTML con el ID "color" y lo almacena en la variable 'color'.
const color = document.querySelector("#color");

// Selecciona el elemento HTML con el ID "code-color" y lo almacena en la variable 'codeColor'.
const codeColor = document.querySelector("#code-color");

// Selecciona el elemento HTML con la clase "body" y lo almacena en la variable 'body'.
const body = document.querySelector(".body");

// Esta función se encarga de generar un color aleatorio y actualizar la apariencia de la página.
function colorGenerate() {
  // Genera un número hexadecimal aleatorio entre 0 y 16777215 (FFFFFF en hexadecimal).
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // Concatena "#" al número hexadecimal aleatorio para obtener un color válido en formato "#RRGGBB".
  const newColor = "#" + randomColor;

  // Actualiza el contenido del elemento con el ID "code-color" con el nuevo color generado.
  codeColor.innerHTML = newColor;

  // Actualiza el fondo del elemento con la variable 'color' con el nuevo color generado.
  color.style.backgroundColor = newColor;

  // Actualiza el fondo del elemento con la clase "body" con el nuevo color generado.
  body.style.backgroundColor = newColor;
}

// Agrega un evento de escucha al botón seleccionado ('btn') que llama a la función 'colorGenerate' cuando se hace clic.
btn.addEventListener("click", colorGenerate);
