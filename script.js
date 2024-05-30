// punto 1
const createSpan = document.createElement('span'); 
createSpan.textContent = 'Tematica elegida: Tecnologia';
const contenedor = document.getElementById('container');
contenedor.appendChild(createSpan);

// punto 2
const enlace = 'https://www.teknopolis.co/'
const createLink = document.createElement('a')
createLink.textContent = 'Visitar Teknopolis'
createLink.href = enlace
const containerDiv = document.getElementById('link')
containerDiv.appendChild(createLink);

// punto 3
const colors = [
    {nombre: 'Azul', valor: '#007bff'},
    {nombre: 'Turquesa', valor: '#17a2b8'},
    {nombre: 'Verde', valor: '#28a745'},
    {nombre: 'Rojo', valor: '#dc3545'},
];
const elementSelect = document.createElement('select');
elementSelect.id = 'color-select'
colors.forEach((color) =>{
    const createOption = document.createElement('option');
    createOption.textContent = color.nombre
    createOption.value = color.valor
    elementSelect.appendChild(createOption)
})

const selectContainer = document.getElementById('containerselect')
selectContainer.appendChild(elementSelect)

// punto 4
const elementCheckbox = document.createElement('input');
elementCheckbox.type = 'checkbox'
elementCheckbox.id = 'modo-superpuesto'
const elementLabel = document.createElement('label');
elementLabel.textContent = 'Modo superpuesto';
elementLabel.setAttribute('for', 'modo-superpuesto');
const inputContainer = document.getElementById('containercheck')
inputContainer.appendChild(elementCheckbox);
inputContainer.appendChild(elementLabel);

// punto 5

const circles = document.querySelectorAll('.circle');

const changeColor = (circle) =>{
    const selectColors = elementSelect.value
    const modoSuperpuesto = elementCheckbox.checked
    circle.style.backgroundColor = selectColors
    if (modoSuperpuesto) {
        let i = Array.from(circle.parentNode.children).indexOf(circle)
        while (i > 0) {
            i--
            circles[i].style.backgroundColor = selectColors
        }
    }
};
// punto 6
const resetColors = () =>{
    circles.forEach(circle =>{
        circle.style.backgroundColor = '';
    });
}

circles.forEach(circle =>{
    circle.addEventListener('click', () => {
        changeColor(circle)
    })
});
// ... punto 6
document.querySelector('button').addEventListener('click', resetColors);

// punto 7
// hecho

// punto 8
const adjustLayout = () =>{
    const adwidht = window.innerWidth
    const circles = document.querySelectorAll('.circle');
    const colorSelect = document.getElementById('color-select');
    const superpuesto = document.getElementById('modo-superpuesto');
    console.log(superpuesto)
    if (adwidht < 500) {
        circles.forEach(circle =>{
            circle.style.backgroundColor = '#cccccc'
        });
        colorSelect.disabled = true;
        superpuesto.disabled = true;

        circles.forEach(circle =>{
            circle.removeEventListener('click', changeColor)
        });
    }else{
        circles.forEach(circle =>{
            circle.style.backgroundColor = ''
        });
        colorSelect.disabled = false;
        superpuesto.disabled = false;
        circles.forEach(circle =>{
            circle.removeEventListener('click', changeColor)
        });
    }
}

window.addEventListener('resize', adjustLayout)
window.addEventListener('load', adjustLayout)

