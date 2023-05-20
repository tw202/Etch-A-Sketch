const container = document.querySelector('#container');
let pixel;
let canvasLength = 450;//px
let pixelPerLenght = 16;
let amountPixelTotal = pixelPerLenght * pixelPerLenght;
for (let i = 0; i < amountPixelTotal; i++){
    pixel = document.createElement('div');
    let width = canvasLength/pixelPerLenght 
    pixel.style.width = `${width}px`;
    pixel.style.height = `${width}px`; //rectangle
    pixel.id = 'pixel';
    container.appendChild(pixel);
}

const pixels = document.querySelectorAll('#pixel')
let isDrawing = false;

container.addEventListener('mousedown', () => {
    isDrawing = true;
})
container.addEventListener('mouseup', () => {
    isDrawing = false;
})

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', (e) => {
        if (isDrawing){
            e.target.style.backgroundColor = 'black';
        }       
    })
})