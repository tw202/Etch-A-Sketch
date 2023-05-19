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
    container.appendChild(pixel);
}