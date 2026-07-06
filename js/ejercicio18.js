 // Seleccionar los elementos importantes del DOM
  const input = document.getElementById('nuevoElemento');
  const botonAgregar = document.getElementById('agregarBtn');
  const lista = document.getElementById('lista');

  // Función para agregar un nuevo elemento a la lista
  function agregarElemento() {
    const texto = input.value.trim(); 

    if (texto !== '') {
      
      const li = document.createElement('li');
      li.classList.add('elemento'); 

      const textoNodo = document.createTextNode(texto);
      li.appendChild(textoNodo); 

      // Crear el botón de eliminar
      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.classList.add('btn', 'btn-sm', 'btn-outline-danger');
      botonEliminar.addEventListener('click', function() {
        li.remove(); 
    });

      li.appendChild(botonEliminar);

      lista.appendChild(li);

      input.value = '';
      input.focus();
    } else {
      alert('Escribe algo para agregar a la lista.');
    }
  }

  botonAgregar.addEventListener('click', agregarElemento);

  input.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
      agregarElemento();
    }
  });