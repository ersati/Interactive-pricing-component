console.log('ok');

const inputRange = document.querySelector('.card__top__input')
const priceSpan = document.querySelector('.card__top__label-span')
const inputSwitch = document.querySelector('.card__mid__input');
const monthOrYear = document.querySelector('.card__top__label__span-text')

const yearly = (inputRange.value * 12)
const yearlyDiscount = yearly / 4;
const yearlyWithDiscount = yearly - yearlyDiscount;
const val = inputRange.value;

inputSwitch.checked ? priceSpan.textContent = yearlyWithDiscount : priceSpan.textContent = val;


inputRange.addEventListener('input', () => {
    const yearly = (inputRange.value * 12)
    const yearlyDiscount = yearly / 4;
    const yearlyWithDiscount = yearly - yearlyDiscount;
    const val = inputRange.value
    if (inputSwitch.checked) {
        priceSpan.textContent = `$${yearlyWithDiscount}`
    } else {
        priceSpan.textContent = `$${val}`
    }

})


inputSwitch.addEventListener('input', () => {
    console.log(inputSwitch.checked, priceSpan)

    if (inputSwitch.checked) {
        priceSpan.textContent = `$${yearlyWithDiscount}`
        monthOrYear.innerText = '/year';

    } else {
        priceSpan.textContent = `$${val}`
        monthOrYear.innerText = '/month';
    }
})