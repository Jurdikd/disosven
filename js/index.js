document.addEventListener('DOMContentLoaded',  async () => {
    // 1. Inicializar SlimSelect con configuraciones personalizadas
    const formularioSelect = new SlimSelect({
        select: '#selectRequerimiento',
        settings: {
            placeholderText: 'Buscar o seleccionar requerimiento...',
            allowDeselect: true,
            searchText: 'No se encontraron resultados',
            searchPlaceholder: 'Escribe para buscar...',
        },
        events: {
            afterChange: function (newVal) {
                const btnFormulario = document.getElementById('btnIrAlFormulario');
                
                // SlimSelect v2 maneja las respuestas en arreglos de objetos
                if (newVal && newVal.length > 0 && newVal[0].value) {
                    const URLSeleccionada = newVal[0].value;
                    btnFormulario.setAttribute('href', URLSeleccionada);
                    btnFormulario.classList.remove('disabled');
                } else {
                    // Si se deselecciona o está vacío, bloquea el botón
                    btnFormulario.setAttribute('href', '#');
                    btnFormulario.classList.add('disabled');
                }
            }
        }
    });

    // 2. Control del ciclo de vida del Modal (Reset al cerrar)
    const modalElement = document.getElementById('modalAyuda');
    modalElement.addEventListener('hidden.bs.modal', function () {
        // Devuelve el select al estado inicial (placeholder) limpiamente
        formularioSelect.setSelected('');
        
        const btnFormulario = document.getElementById('btnIrAlFormulario');
        btnFormulario.setAttribute('href', '#');
        btnFormulario.classList.add('disabled');
    });
});