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
        console.log(button)

        if(numtaskNow == 1 || numtaskNow == 2 || numtaskNow == 3 || numtaskNow == 4 || numtaskNow == 5 || numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Выбрать один правильный ответ"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Выберите правильный вариант перевода вытачки для данной модели"
        }

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
        if(numtaskNow == 1 || numtaskNow == 2 || numtaskNow == 3 || numtaskNow == 4 || numtaskNow == 5 || numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Выбрать один правильный ответ"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Выберите правильный вариант перевода вытачки для данной модели"
        }
    }
})

const nextBtn = document.querySelector('.next-btn')

nextBtn.addEventListener('click',()=> {
    console.log(numtaskNow)
    if(numtaskNow < 8) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow++;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');
        if(numtaskNow == 1 || numtaskNow == 2 || numtaskNow == 3 || numtaskNow == 4 || numtaskNow == 5 || numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Выбрать один правильный ответ"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Выберите правильный вариант перевода вытачки для данной модели"
        }
    }
})