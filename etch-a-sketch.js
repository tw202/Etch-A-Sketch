const container = document.querySelector('#container');
let squares;
let isDrawing = false;

container.addEventListener('mousedown', () => {
    isDrawing = true;
})
container.addEventListener('mouseup', () => {
    isDrawing = false;
})

function createCanvas(squaresPerSideInput) {
    let square;
    let canvasLength = 450;//px
    let squaresPerSide = squaresPerSideInput;
    if (squaresPerSide > 100){
        alert("Value > 100 not allowed! Fallback to default value 16");
        squaresPerSide = 16;
    }

    let squaresPerSideInt;
    squaresPerSideInt = parseInt(squaresPerSide);

    if(isNaN(squaresPerSideInt)){
        alert('Please enter a number');
        squaresPerSide = 16;//Fallback to default
    };

    let amountSquaresTotal = squaresPerSide * squaresPerSide;
    for (let i = 0; i < amountSquaresTotal; i++){
        square = document.createElement('div');
        let width = canvasLength/squaresPerSide 
        square.style.width = `${width}px`;
        square.style.height = `${width}px`; //rectangle
        square.id = 'square';
        square.style.backgroundColor = 'white';
        container.appendChild(square);
    }
}

function resetCanvas(squaresInput){
    squaresInput.forEach((square)=>{
        container.removeChild(square);
    })
}

function addEventListenerToSquares(squaresInput){
    squaresInput.forEach((pixel) => {
        pixel.addEventListener('mouseover', (e) => {
            if (isDrawing){
                e.target.style.backgroundColor = 'black';
            }       
        })
    })
}

function getSquares(){
    return document.querySelectorAll('#square');
}

//initial canvas
createCanvas(16);
squares = getSquares();
addEventListenerToSquares(squares);


const choseSizeButton = document.querySelector('button');
choseSizeButton.addEventListener('click', () => {
    squaresPerSide = prompt('Choose number of squares per side!');

    //reset canvas - remove squares
    resetCanvas(squares);
    createCanvas(squaresPerSide);
    squares = getSquares();
    addEventListenerToSquares(squares);
})