
const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted;
// function handleSubmit(e) {
//    e.preventDefault();

//     if(!inputValue.value || inputValue.value < 0) {
//         alert('Informe um valor correto');
//         return;
//    } /*else if(!selectedCurrency.value) {
//             alert('Escolha uma moeda!');
//             return; // não pega o escolha uma moeda
//    }*/
// };
function converter() {
    if(selectedCurrency.value === 'eur'){
        valueConverted = inputValue.value * 5.18;
        result.innerHTML = valueConverted.toFixed(2)
    } else if(selectedCurrency.value === 'dol'){
        valueConverted = inputValue.value * 5.32;
        result.innerHTML = valueConverted.toFixed(2)
    }
    inputValue.value='';
    selectedCurrency.value='';
};



 converter()