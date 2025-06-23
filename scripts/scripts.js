  document.addEventListener('DOMContentLoaded', () => {
    // ordenamos buscar los objetos con la clase que le pusimos a los artículos en el HTML
    const articulos = document.querySelectorAll('.platilos');

    articulos.forEach(article => {
        // cargamos en la constante objetosDeClick los elementos HTML a los que le queremos dar click
        const elementosDeClick = article.querySelectorAll('img, h1, ul');
        // cargamos en la constante objetoOculto los elementos con la clase que tiene el display:none en el css 
        const objetoOculto = article.querySelector('.cajaComplementos');

        // le decimos qué hacerle al objeto oculto si le damos click a los objetos de click
        if (objetoOculto) {
            elementosDeClick.forEach(element => {
                element.addEventListener('click', function()  {
                    if (objetoOculto.style.display === 'none' || objetoOculto.style.display === '') {
                        objetoOculto.style.display = 'block';
                    } else {
                        objetoOculto.style.display = 'none';
                    }
                });
            });
        }
    });
});




  