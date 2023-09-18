const circles = document.querySelectorAll('.circle');
const taskWraps = document.querySelectorAll('.practice-part-wrap')
const numNum = document.querySelector('.num-now')

let i;
let numtaskNow = 1
for(i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', (evt)=> {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;

        let i;
        for(i = 0; i < taskWraps.length; i++) {
            circles[i].classList.remove('circle_active');
            taskWraps[i].classList.remove('practice-part-wrap--active')
        }
        numNum.innerHTML = button[5]
        numtaskNow = button[5] //номер задания
        if(numtaskNow == 1) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Какие качества должны быть у хорошего хозяина / хозяйки?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Задание «верно-неверно»"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Найди правильные ответы"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте следующие ключевые слова с их определениями."
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте виды номеров гостиницы с их описанием"
        }
        console.log(button)

        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');      
    })
}

const backBtn = document.querySelector('.back-btn')

backBtn.addEventListener('click',()=> {
    console.log(numtaskNow)
    if(numtaskNow > 1) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow--;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');

        if(numtaskNow == 1) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Какие качества должны быть у хорошего хозяина / хозяйки?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Задание «верно-неверно»"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Найди правильные ответы"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = " Сопоставьте следующие ключевые слова с их определениями."
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте виды номеров гостиницы с их описанием"
        }
    }
})

const nextBtn = document.querySelector('.next-btn')

nextBtn.addEventListener('click',()=> {
    console.log(numtaskNow)
    if(numtaskNow < 7) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow++;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');

        if(numtaskNow == 1) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Какие качества должны быть у хорошего хозяина / хозяйки?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Задание «верно-неверно»"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Найди правильные ответы"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = " Сопоставьте следующие ключевые слова с их определениями."
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте виды номеров гостиницы с их описанием"
        }
    }
})