document.addEventListener('DOMContentLoaded', () => {
    const openPopupButton = document.getElementById('open-popup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('popup-close');

    // Abrir el popup
    openPopupButton.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });

    // Cerrar el popup al hacer clic en el botón de cierre
    closePopupButton.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Cerrar el popup si se hace clic fuera del contenido del popup
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
});