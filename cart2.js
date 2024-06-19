// code for counter
var contain = document.querySelector('.container'),
    res = document.querySelector('.subtotal-price'),
    input = contain.querySelector('input[class*=input]');

contain.addEventListener('click', e => {
    var t = e.target;
    input.value = +input.value;

    if (t.closest('button[class*=minus')) {
        --input.value;
    }
    else if (t.closest('button[class*=add]')) {
        ++input.value
    }

    res.textContent = (40*input.value).toFixed(0);
})