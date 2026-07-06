const obtenerTareas = () => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  };

  const guardarTareas = (tareas) => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  };

  const manejarTareas = (() => {
    let tareas = obtenerTareas(); 

    const agregar = (texto) => {
      tareas.push(texto);
      guardarTareas(tareas);
    };

    const eliminar = (indice) => {
      tareas.splice(indice, 1);
      guardarTareas(tareas);
    };

    return { agregar, eliminar };
  })();

  const renderizarTareas = () => {
    const lista = document.getElementById('lista-tareas');
    const tareas = obtenerTareas();

    lista.innerHTML = '';

    tareas.forEach((tarea, indice) => {
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = tarea;

      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.onclick = () => eliminarTarea(indice);

      li.appendChild(span);
      li.appendChild(btnEliminar);
      lista.appendChild(li);
    });
  };

  const agregarTarea = () => {
    const input = document.getElementById('nueva-tarea');
    const texto = input.value.trim();

    if (texto === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campo vacío',
        text: 'Por favor ingresa una tarea antes de agregarla.'
      });
      return;
    }

    manejarTareas.agregar(texto);
    input.value = '';
    renderizarTareas();
  };

  const eliminarTarea = (indice) => {
    Swal.fire({
      icon: 'warning',
      title: '¿Eliminar tarea?',
      text: 'Esta acción no se puede deshacer.',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        manejarTareas.eliminar(indice);
        renderizarTareas();
        Swal.fire({
          icon: 'success',
          title: 'Tarea eliminada',
          text: 'La tarea se eliminó correctamente.'
        });
      }
    });
  };


  renderizarTareas();