
var currentNumber = 0 // A variável eu posso dar o nome que eu quiser.

function increment() {
    currentNumber = currentNumber + 1
    print()
}

function decrement() {
    currentNumber = currentNumber - 1
    print()
}

function print(){
    var cont = document.getElementById("currentNumber") // A variável eu posso dar o nome que eu quiser.
    cont.innerHTML = currentNumber // O número que está dentro da var cont passa a ser o meu número.
}

