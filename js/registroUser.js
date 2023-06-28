document.addEventListener('DOMContentLoaded', () => {
  const registroForm = document.getElementById('registroForm');

  registroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Resto del código para enviar los datos del formulario al servidor
  });
});
