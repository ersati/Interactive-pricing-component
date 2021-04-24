const inputRange = document.querySelector('.card__top__input')
const priceSpan = document.querySelector('.card__top__label-span')
const inputSwitch = document.querySelector('.card__mid__input');
const monthOrYear = document.querySelector('.card__top__label__span-text')

function updateValue() {
    const yearly = (inputRange.value * 12)
    const yearlyDiscount = yearly / 4;
    const yearlyWithDiscount = yearly - yearlyDiscount;
    const val = inputRange.value;

    if (inputSwitch.checked) {
        priceSpan.textContent = `$${yearlyWithDiscount}`
        monthOrYear.innerText = '/year';

    } else {
        priceSpan.textContent = `$${val}`
        monthOrYear.innerText = '/month';
    }

}
updateValue()

inputRange.addEventListener('input', updateValue)

inputSwitch.addEventListener('input', updateValue);


const slider = document.querySelector('input[type="range"] ');


const min = slider.min
const max = slider.max
const value = slider.value

slider.style.background = `linear-gradient(to right, var(--softCyan) 0%, var(--softCyan) ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, var(--softCyan) 0%, var(--softCyan) ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
};