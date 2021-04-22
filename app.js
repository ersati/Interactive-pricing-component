console.log('ok');

const inputRange = document.querySelector('.card__top__input')
const priceSpan = document.querySelector('.card__top__label-span')

inputRange.addEventListener('input', () => {
    const val = inputRange.value
priceSpan.textContent = `$${val}`;
console.log(val)
})

const inputSwitch = document.querySelector('.card__mid__input');
const monthOrYear = document.querySelector('.card__top__label')
inputSwitch.addEventListener('input', () => {
     console.log(inputSwitch.checked, monthOrYear.textContent)

     if(inputSwitch.checked){
         monthOrYear.nodeValue = '/year';

     } else {
         monthOrYear.nodeValue = '/month';
     }
})