const card__1 = document.querySelector('#card__1');
const card__2 = document.querySelector('#card__2');
const card__3 = document.querySelector('#card__3');
const card__1__border = document.querySelector('.card__1__border');
const card__2__border = document.querySelector('.card__2__border');
const card__1__portion = document.querySelector('.card__1__portion');
const card__2__portion = document.querySelector('.card__2__portion');
const blue__border = document.querySelector('.blue__border');
const blue__portion = document.querySelector('.blue__portion');
const card__buy__1 = document.querySelector('.card__buy__1');
const pink__border = document.querySelector('.pink__border');
const pink__portion = document.querySelector('.pink__portion');
const card__buy__2 = document.querySelector('.card__buy__2');
card__1__border.onmouseover = card__1__border.onmouseout = handler__1;
card__2__border.onmouseover = card__2__border.onmouseout = handler__2;

function card__click(e){
    console.log(e)
    if(e.id == 'card__1'){
        console.log('1')
        if (card__buy__1.innerHTML === 'Чего сидишь? Порадуй котэ, <a class="blue__buy">купи</a>.' ){
            card__1__border.classList.toggle('pink__selected__border');
            card__1__portion .classList.toggle('pink__selected__portion');
            card__buy__1.classList.toggle('selected');
            card__buy__1.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        }else{
            card__1__border.classList.toggle('pink__selected__border');
            card__1__portion .classList.toggle('pink__selected__portion');
            card__buy__1.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="pink__buy">купи</a>.'
            }
        
    }else if(e.id == 'card__2'){
        console.log('2')
        if (card__buy__2.innerHTML === 'Чего сидишь? Порадуй котэ, <a class="blue__buy">купи</a>.' ){
            card__2__border.classList.toggle('pink__selected__border');
            card__2__portion.classList.toggle('pink__selected__portion');
            card__buy__2.classList.toggle('selected');
            card__buy__2.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        }else{
            card__2__border.classList.toggle('pink__selected__border');
            card__2__portion.classList.toggle('pink__selected__portion');
            card__buy__2.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="pink__buy">купи</a>.'
            }
    }else if(e.id == 'card__3'){
        alert('Нет в наличии!')
        console.log('3')
    }else{
        console.log('error!')
    }
}



function handler__1(event){
    if (event.type == 'mouseover' ) {
        if (card__buy__1.innerHTML === 'Чего сидишь? Порадуй котэ, <a class="blue__buy">купи</a>.' ){
            card__1__border.classList.toggle('blue__selected__border');
            card__1__portion.classList.toggle('blue__selected__portion');
            card__buy__1.innerHTML = 'Печень утки разварная с артишоками.';
            
        }else if (card__buy__1.innerHTML === 'Чего сидишь? Порадуй котэ, <a class="pink__buy">купи</a>.' ){
            card__1__border.classList.toggle('pink__selected__border');
            card__1__portion.classList.toggle('pink__selected__portion');
            card__buy__1.innerHTML = 'Печень утки разварная с артишоками.';
        }
      }
      if (event.type == 'mouseout') {
        card__1__border.classList.toggle('blue__selected__border');
        card__1__portion.classList.toggle('blue__selected__portion');
        card__buy__1.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="blue__buy">купи</a>.';
        }
}

function handler__2(event){
    if (event.type == 'mouseover') {
        if (card__buy__2.innerHTML === 'Чего сидишь? Порадуй котэ, <a class="blue__buy">купи</a>.' ){
            card__2__border.classList.toggle('blue__selected__border');
            card__2__portion.classList.toggle('blue__selected__portion');
            card__buy__2.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
        }else if (card__buy__2.innerHTML === 'Чего сидишь? Порадуй котэ, <a class="pink__buy">купи</a>.' ){
            card__2__border.classList.toggle('pink__selected__border');
            card__2__portion.classList.toggle('pink__selected__portion');
            card__buy__2.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
        }
      }
      if (event.type == 'mouseout') {
        card__2__border.classList.toggle('blue__selected__border');
        card__2__portion.classList.toggle('blue__selected__portion');
        card__buy__2.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="blue__buy">купи</a>.';
        }
}