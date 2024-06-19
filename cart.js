// 4('.like-btn').on('click', function() {
//     $(this).toggleClass('is-active');
//  });
//  $('.minus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value &amp;amp;gt; 1) {
//         value = value - 1;
//     } else {
//         value = 0;
//     }

//   $input.val(value);

// });

// $('.plus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value &amp;amp;lt; 100) {
//         value = value + 1;
//     } else {
//         value =100;
//     }

//     $input.val(value);
// });


// $('.minus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value > 1) {
//         value = value - 1;
//     } else {
//         value = 0;
//     }

//     $input.val(value);
// });

// $('.plus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value < 100) {
//         value = value + 1;
//     } else {
//         value = 100;
//     }

//     $input.val(value);
// });
// hhhgfddddmjjhscjsk

// $('.like-btn').on('click', function() {
//     $(this).toggleClass('is-active');
// });

// $('.minus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value > 1) {
//         value = value - 1;
//     } else {
//         value = 0;
//     }

//     $input.val(value);
// });

// $('.plus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value < 100) {
//         value = value + 1;
//     } else {
//         value = 100;
//     }

//     $input.val(value);
// });

let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
// const resetBtn = document.querySelector('#reset');
// increment
incrementBtn.addEventListener('click', () => {
    counter++;


    counterValue.innerHTML = counter;
});

// decrement
decrementBtn.addEventListener('click', () => {
    counter--;
    
    while(counter >= 0){
        if(counter >0){
        break;
    }
}
    counterValue.innerHTML = counter;
});



