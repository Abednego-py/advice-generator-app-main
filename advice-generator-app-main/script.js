
let adviceText = document.querySelector('p')

let adviceNumber = document.querySelector('h6')

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        adviceText.innerText = data['slip']['advice']
        adviceNumber.innerText =`Advice # ${data['slip']['id']}`
    })
    .catch(err => console.log(err))
}
