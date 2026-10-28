import feather from 'feather-icons';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa los iconos Feather
  feather.replace();

  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (dropdownToggle && dropdownMenu) {
    
    // Función centralizada para abrir/cerrar el menú
    const setMenuState = (isOpen) => {
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        dropdownMenu.classList.add('is-open');
      } else {
        dropdownMenu.classList.remove('is-open');
      }
    };

    // 1. Clic en el botón Recetas
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentlyExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!currentlyExpanded);
    });

    // 2. Cerrar con la tecla ESCAPE
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        const isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          setMenuState(false);
          dropdownToggle.focus(); // Devuelve el foco al botón para no perder al usuario
        }
      }
    });

    // 3. Cerrar al hacer clic fuera del desplegable
    document.addEventListener('click', (e) => {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        setMenuState(false);
      }
    });
  }
});