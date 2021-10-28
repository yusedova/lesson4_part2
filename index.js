/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/

/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/

const prev=document.getElementById('btn-prev'),
      next=document.getElementById('btn-next'),
      slides=document.querySelectorAll('.slide'),
      dots=document.querySelectorAll('.dot');

let index=0;

const activeSlide= n =>{
    for(slide of slides){
        //console.log(slide);
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide=()=>{
    if (index==slides.length-1) {
        index=0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide=()=>{
    if (index==0) {
        index=slides.length-1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

const activeDot= n =>{
    for(dot of dots){
        //console.log(slide);
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

prepareCurrentSlide= ind=>{
    activeSlide(ind);
    activeDot(ind);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

dots.forEach((item, indexDot)=>{
    item.addEventListener('click', ()=>{
        index=indexDot;
        prepareCurrentSlide(index);
    })
})

let timerId=setInterval(nextSlide, 2000);

const slWrap=document.querySelector('.slider-wrapper');

console.log(slWrap);
slWrap.addEventListener('mouseover', ()=>{
    //console.log('stop'); 
    clearInterval(timerId);
});
slWrap.addEventListener('mouseout', ()=>{
    timerId=setInterval(nextSlide, 2000);
});