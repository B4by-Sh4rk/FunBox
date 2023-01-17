const card__1 = document.querySelector('#card__1');
const card__2 = document.querySelector('#card__2');
const card__3 = document.querySelector('#card__3');
const blue__border = document.querySelector('.blue__border');
const blue__portion = document.querySelector('.blue__portion');
const card__buy__1 = document.querySelector('.card__buy__1');
const pink__border = document.querySelector('.pink__border');
const pink__portion = document.querySelector('.pink__portion');
const card__buy__2 = document.querySelector('.card__buy__2');
blue__border.onmouseover = blue__border.onmouseout = handler__1;
pink__border.onmouseover = pink__border.onmouseout = handler__2;

function card__click(e){
    console.log(e)
    if(e.id == 'card__1'){
        console.log('1')
        if (card__buy__1.innerHTML === 'Чего сидишь? Порадуй котэ, <a class="blue__buy">купи</a>.' ){
            blue__border.classList.toggle('blue__selected__border');
            blue__portion.classList.toggle('blue__selected__portion');
            card__buy__1.classList.toggle('selected');
            card__buy__1.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        }else{
            blue__border.classList.toggle('blue__selected__border');
            blue__portion.classList.toggle('blue__selected__portion');
            card__buy__1.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="blue__buy">купи</a>.'
            }
        
    }else if(e.id == 'card__2'){
        console.log('2')
        if (card__buy__2.innerHTML === 'Чего сидишь? Порадуй котэ, <a class="pink__buy">купи</a>.' ){
            pink__border.classList.toggle('pink__selected__border');
            pink__portion.classList.toggle('pink__selected__portion');
            card__buy__2.classList.toggle('selected');
            card__buy__2.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        }else{
            pink__border.classList.toggle('pink__selected__border');
            pink__portion.classList.toggle('pink__selected__portion');
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
            blue__border.classList.toggle('blue__selected__border');
            blue__portion.classList.toggle('blue__selected__portion');
            card__buy__1.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        }
      }
      if (event.type == 'mouseout') {
        blue__border.classList.toggle('blue__selected__border');
        blue__portion.classList.toggle('blue__selected__portion');
        card__buy__1.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="blue__buy">купи</a>.'
        }
}

function handler__2(event){
    if (event.type == 'mouseover') {
        if (card__buy__2.innerHTML === 'Чего сидишь? Порадуй котэ, <a class="pink__buy">купи</a>.' ){
            pink__border.classList.toggle('pink__selected__border');
            pink__portion.classList.toggle('pink__selected__portion');
            card__buy__2.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        }
      }
      if (event.type == 'mouseout') {
        pink__border.classList.toggle('pink__selected__border');
        pink__portion.classList.toggle('pink__selected__portion');
        card__buy__2.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="pink__buy">купи</a>.'
        }
}