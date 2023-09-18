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
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию гостеприимства в отеле и ответьте на вопрос: Какие аспекты гостеприимства можно наблюдать на этой картинке?"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию гостеприимства в отеле и ответьте на вопрос: Какие аспекты гостеприимства можно наблюдать на этой картинке?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию, изображающую улыбающегося сотрудника гостиницы, встречающего гостя с широко раскрытыми руками. Напишите краткое описание этой сцены и опишите, как она проявляет гостеприимство и доброту"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте следующие ключевые слова с их определениями"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию, изображающую группу туристов, которым помогают с чемоданами на вокзале. Назовите и объясните три аспекта гостеприимства, которые проявлены на этой картинке"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию ресторана, где официантка дружелюбно улыбается, принося гостю заказ. Поясните, как это проявление гостеприимства влияет на опыт клиента"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Разберите понятие «кубок, наполненный добротой» на составляющие элементы и отметьте их значимость в рамках гостеприимства"
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
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию гостеприимства в отеле и ответьте на вопрос: Какие аспекты гостеприимства можно наблюдать на этой картинке?"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию гостеприимства в отеле и ответьте на вопрос: Какие аспекты гостеприимства можно наблюдать на этой картинке?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию, изображающую улыбающегося сотрудника гостиницы, встречающего гостя с широко раскрытыми руками. Напишите краткое описание этой сцены и опишите, как она проявляет гостеприимство и доброту"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте следующие ключевые слова с их определениями"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию, изображающую группу туристов, которым помогают с чемоданами на вокзале. Назовите и объясните три аспекта гостеприимства, которые проявлены на этой картинке"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию ресторана, где официантка дружелюбно улыбается, принося гостю заказ. Поясните, как это проявление гостеприимства влияет на опыт клиента"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Разберите понятие «кубок, наполненный добротой» на составляющие элементы и отметьте их значимость в рамках гостеприимства"
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
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию гостеприимства в отеле и ответьте на вопрос: Какие аспекты гостеприимства можно наблюдать на этой картинке?"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию гостеприимства в отеле и ответьте на вопрос: Какие аспекты гостеприимства можно наблюдать на этой картинке?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию, изображающую улыбающегося сотрудника гостиницы, встречающего гостя с широко раскрытыми руками. Напишите краткое описание этой сцены и опишите, как она проявляет гостеприимство и доброту"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте следующие ключевые слова с их определениями"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию, изображающую группу туристов, которым помогают с чемоданами на вокзале. Назовите и объясните три аспекта гостеприимства, которые проявлены на этой картинке"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию ресторана, где официантка дружелюбно улыбается, принося гостю заказ. Поясните, как это проявление гостеприимства влияет на опыт клиента"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Разберите понятие «кубок, наполненный добротой» на составляющие элементы и отметьте их значимость в рамках гостеприимства"
        }
    }
})