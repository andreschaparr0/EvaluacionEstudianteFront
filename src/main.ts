import { Serie } from './models/serie.js';
import { series } from "./data/data.js";

export async function enviarFormulario(event: Event) {
  event.preventDefault(); // Evita el comportamiento de envío predeterminado

  const formElement = document.getElementById("miFormulario") as HTMLFormElement;
  const formData = new FormData(formElement);

  try {
    const response = await fetch('/ruta-del-servidor', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Redirige a finish.html si la respuesta es exitosa
      window.location.href = "finish.html";
    } else {
      alert("Hubo un error en el envío.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error en la conexión con el servidor.");
  }
}

async function enviarLogin(event) {
  event.preventDefault(); // Previene el envío del formulario tradicional

  // Obtiene los datos del formulario
  const form = document.getElementById("loginForm");
  const formData = new FormData(form);

  try {
      // Envía la solicitud POST al servidor (ajusta la URL a tu backend si es necesario)
      const response = await fetch('/ruta-del-servidor/login', {
          method: 'POST',
          body: formData
      });

      if (response.ok) {
          // Redirige a `menu.html` si el login es exitoso
          window.location.href = 'menu.html';
      } else {
          alert("Error en el inicio de sesión. Inténtalo de nuevo.");
      }
  } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Hubo un problema con el servidor.");
  }
}

// Asigna la función `enviarLogin` al evento `submit` del formulario
    document.getElementById("loginForm").onsubmit = enviarLogin;
