const registroForm = document.getElementById('registroform');
const mensajeDiv = document.getElementById('mensaje');

registroForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const usuario = document.getElementById('usuario').value;
  const contrasena = document.getElementById('contrasena').value;

  // Realiza la petición para guardar el usuario en el servidor
  fetch('/registrarUsuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, apellido, correo, usuario, contrasena })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al registrar el usuario');
    }
  })
  .catch(error => {
    mensajeDiv.textContent = 'Error al registrar el usuario';
    console.error('Error de red:', error);
  });
});
