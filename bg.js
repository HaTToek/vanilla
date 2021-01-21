const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleimgLoad(){
//     console.log("fingished")
// }

function paintImage(ImgNumber){
    const image = new Image();
    image.src = `images/${ImgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
    // image.addEventListener("loadend", handleimgLoad)
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number; 
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();