document.addEventListener('DOMContentLoaded', extraerImagenes);

function extraerImagenes() {
    // Seleccionar el botón y el textarea
    const extraerBtn = document.getElementById('extraerBtn') as HTMLButtonElement;
    const htmlInput = document.getElementById('htmlInput') as HTMLTextAreaElement;
    const contenedorImagenes = document.getElementById('imagenes') as HTMLDivElement;
    
    //para el textarea
    const html = htmlInput.value;

    const regex = /<img[^>]+src="([^">]+)"/g;
    //para almacenar las imagenes extraidas
    const imagenes: string[] = [];

    // Busca todas las coincidencias
    let match: RegExpExecArray | null;
    while ((match = regex.exec(html)) !== null) {
        imagenes.push(match[1]);

    // Muestra los enlaces en el contenedor de resultados
    contenedorImagenes.innerHTML = '';

    if (imagenes.length === 0) {
        contenedorImagenes.innerHTML = 'No se encontraron imágenes.';
    } else {
        imagenes.forEach(src => {
            // Crear un contenedor para cada enlace
            const contenedor = document.createElement('div');
            
            const link = document.createElement('a');
            link.href = src;
            link.textContent = src;
            link.target = '_blank'; // Abre el enlace en una nueva pestaña
            
            // Añadir el enlace al contenedor
            contenedor.appendChild(link);
            
            // Añadir el contenedor al contenedor de resultados
            contenedorImagenes.appendChild(contenedor);
        });
    }
}

// Asocia el evento click del botón con la función de extracción
extraerBtn.addEventListener('click', extraerImagenes);
};

