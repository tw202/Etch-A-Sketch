const container = document.querySelector('#container');
let square;
let canvasLength = 450;//px
let squaresPerSide = 16;
let amountSquaresTotal = squaresPerSide * squaresPerSide;
for (let i = 0; i < amountSquaresTotal; i++){
    square = document.createElement('div');
    let width = canvasLength/squaresPerSide 
    square.style.width = `${width}px`;
    square.style.height = `${width}px`; //rectangle
    square.id = 'square';
    container.appendChild(square);
}

const squares = document.querySelectorAll('#square')
let isDrawing = false;

container.addEventListener('mousedown', () => {
    isDrawing = true;
})
container.addEventListener('mouseup', () => {
    isDrawing = false;
})

squares.forEach((pixel) => {
    pixel.addEventListener('mouseover', (e) => {
        if (isDrawing){
            e.target.style.backgroundColor = 'black';
        }       
    })
})

const choseSizeButton = document.querySelector('button');
choseSizeButton.addEventListener('click', () => {
    squaresPerSide = prompt('Choose number of squares per side!');
})