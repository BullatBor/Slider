const upBtn = document.querySelector('.up-button');

const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slideCount = mainSlide.querySelectorAll('div').length;

const container = document.querySelector('.container');


let activeslideindex = 0;

sidebar.style.top = `-${(slideCount - 1) *100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});
downBtn.addEventListener('click', () => {
    changeSlide('down');
});


function changeSlide(direction) {
    if(direction === 'up') {
        activeslideindex++;
        if(activeslideindex === slideCount)
        {
            activeslideindex = 0;
        }
    }
    else if(direction === 'down') {
        activeslideindex--;
        if(activeslideindex < 0)
        {
            activeslideindex = slideCount - 1;
        }
    }
    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeslideindex * height}px)`;
    sidebar.style.transform = `translateY(${activeslideindex * height}px)`;
}