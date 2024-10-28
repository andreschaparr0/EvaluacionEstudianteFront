"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarFormulario = enviarFormulario;
function enviarFormulario(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault(); // Evita el comportamiento de envío predeterminado
        const formElement = document.getElementById("miFormulario");
        const formData = new FormData(formElement);
        try {
            const response = yield fetch('/ruta-del-servidor', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                // Redirige a finish.html si la respuesta es exitosa
                window.location.href = "finish.html";
            }
            else {
                alert("Hubo un error en el envío.");
            }
        }
        catch (error) {
            console.error("Error:", error);
            alert("Error en la conexión con el servidor.");
        }
    });
}
