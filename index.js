const elForm = document.querySelector('#form');
const elInput = elForm.querySelector('#input');
const elCheckbox = elForm.querySelector('#checkbox');
const elCheckbox2 = elForm.querySelector('#checkbox2');
const elSpan = elForm.querySelector('#span');
const elSpan2 = elForm.querySelector('#span2');
const elBtn = elForm.querySelector('#submit');
const elHeader = elForm.querySelector('#header');

elForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(elInput.value >= 5 && elInput.value < 30){
        elSpan.classList.add('yes')
    }

    if(elCheckbox.checked &&  elInput.value >= 5 && elInput.value < 30){
        elSpan2.classList.add('no')
    }

    if(elCheckbox.checked && elCheckbox2.checked && elInput.value >= 5 && elInput.value < 30){
        elSpan.classList.add('yes')
    }

    if(elInput.value < 5 && elCheckbox2.checked){
        elSpan2.classList.add('no')
    }

})