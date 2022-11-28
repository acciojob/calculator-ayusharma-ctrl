//your code here

var one = document.getElementById('block1')
var two = document.getElementById('block2')
var three = document.getElementById('block3')
var four = document.getElementById('block4')
var five = document.getElementById('block5')
var six = document.getElementById('block6')
var seven = document.getElementById('block7')
var eight = document.getElementById('block8')
var nine = document.getElementById('block9')
var zero = document.getElementById('block0')
var plus = document.getElementById('plus')
var minus = document.getElementById('minus')
var multiply = document.getElementById('multiply')
var divide = document.getElementById('divide')
var dot = document.getElementById('dot')
var clear = document.getElementById('clr')
var answer = document.getElementById('ans')
var input = document.getElementById('input')

one.onclick = function onclick_1(){
    input.value += 1
}
two.onclick = function onclick_2(){
    input.value += 2
}
three.onclick = function onclick_3(){
    input.value += 3
}
four.onclick = function onclick_4(){
    input.value += 4
}
five.onclick = function onclick_5(){
    input.value += 5
}
six.onclick = function onclick_6(){
    input.value += 6
}
seven.onclick = function onclick_7(){
    input.value += 7
}
eight.onclick = function onclick_8(){
    input.value += 8
}
nine.onclick = function onclick_9(){
    input.value += 9
}
zero.onclick = function onclick_0(){
    input.value += 0
}
dot.onclick = function onclick_dot(){
    input.value += '.' ;
}
plus.onclick = function onclick_plus(){
    input.value += '+'
}
minus.onclick = function onclick_minus(){
    input.value += '-'
}
multiply.onclick = function onclick_multiply(){
    input.value += '*'
}
divide.onclick = function onclick_divide(){
    input.value += '/'
}

clear.onclick = function onclick_clear(){
    input.value = '' ;
}

function onclick_answer(){
    var final = eval(input.value)
    input.value = final
}

answer.onclick = onclick_answer;
