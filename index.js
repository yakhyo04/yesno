const elForm = document.querySelector('#form');
const elInput = document.querySelector('#input');
const elCheckboxFirst = document.querySelector('#checkboxfirst');
const elCheckboxSec = document.querySelector('#checkboxsec');
const elSpan = document.querySelector('#span');
const elSpan2 = document.querySelector('#span2');
const elBtn = document.querySelector('#submit');
const elHeader = document.querySelector('#header');

elForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(elInput.value >= 5 && elInput.value < 30){
        elSpan.classList.add('yes')
    }

    if(elCheckboxFirst.checked &&  elInput.value >= 5 && elInput.value < 30){
        // elSpan.classList.remove('yes')
        elSpan2.classList.add('no')
    }

    if(elCheckboxFirst.checked && elCheckboxSec.checked && elInput.value >= 5 && elInput.value < 30){
        // elSpan2.classList.remove('no')
        elSpan.classList.add('yes')
    }

    if(elInput.value < 5 && elCheckboxSec.checked){
        elSpan2.classList.add('no')
    }

})