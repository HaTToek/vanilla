const clockContainer = document.querySelector('.js-clock'),
  colckTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    colckTitle.innerText = 
        `${hours}:${
            minutes < 10 ? `0${minutes}` : minutes}:${
                seconds < 10 ? `0${seconds}` : `${seconds}`}`
    
}

function init() {
    setInterval(getTime,1000);
}

init();

