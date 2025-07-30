document.addEventListener('DOMContentLoaded', () => {
    console.log('Pagina cargada exitosamente!');

    // Get a reference to the Minecraft heart image
    const heart = document.querySelector('.minecraft-heart-image');

    // Check if the heart element exists before adding the event listener
    if (heart) {
        // Add a click event listener to the heart
        heart.addEventListener('click', () => {
            console.log('¡El corazón ha sido tocado!');
            alert('Mua💋');

            // You can add more actions here, for example:
            // alert('¡Gracias por tocar mi corazón!');
            // heart.style.filter = 'brightness(1.5)'; // Make it brighter on click
        });
    } else {
        console.error('No se encontró el elemento del corazón de Minecraft.');
    }
});
