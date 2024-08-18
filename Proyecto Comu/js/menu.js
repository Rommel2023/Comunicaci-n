document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    // trabajamos con la variable opciones que representa el menu
    switch (opciones) {
        // filtros de categorias 
        case "Camisas":
            document.querySelector('.galeriaCami').style.display = 'block';
            document.querySelector('.galeriaPantas').style.display = 'none';
            document.querySelector('.galeriaJack').style.display = 'none';
            document.querySelector('.galeriaAc').style.display = 'none';
            document.querySelector('.galeriaPostres').style.display = 'none';
            break;
        case "Pantalones":
            document.querySelector('.galeriaCami').style.display = 'none';
            document.querySelector('.galeriaPantas').style.display = 'block';
            document.querySelector('.galeriaJack').style.display = 'none';
            document.querySelector('.galeriaAc').style.display = 'none';
            document.querySelector('.galeriaPostres').style.display = 'none';
            break;
        case "Jackets":
            document.querySelector('.galeriaCami').style.display = 'none';
            document.querySelector('.galeriaPantas').style.display = 'none';
            document.querySelector('.galeriaJack').style.display = 'block';
            document.querySelector('.galeriaAc').style.display = 'none';
            document.querySelector('.galeriaPostres').style.display = 'none';
            break;
        case "Accesorios":
            document.querySelector('.galeriaCami').style.display = 'none';
            document.querySelector('.galeriaPantas').style.display = 'none';
            document.querySelector('.galeriaJack').style.display = 'none';
            document.querySelector('.galeriaAc').style.display = 'block';
            document.querySelector('.galeriaPostres').style.display = 'none';
            break;
        case "postres":
            document.querySelector('.galeriaCami').style.display = 'none';
            document.querySelector('.galeriaPantas').style.display = 'none';
            document.querySelector('.galeriaJack').style.display = 'none';
            document.querySelector('.galeriaAc').style.display = 'none';
            document.querySelector('.galeriaPostres').style.display = 'block';
            break;
        default:
            document.querySelector('.galeriaCami').style.display = 'none';
            document.querySelector('.galeriaPantas').style.display = 'none';
            document.querySelector('.galeriaJack').style.display = 'none';
            document.querySelector('.galeriaAc').style.display = 'none';
            document.querySelector('.galeriaPostres').style.display = 'none';

    }

}