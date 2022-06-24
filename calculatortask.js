let firstOutput = 'Do you want to perform a basic calculation?';
alert(firstOutput);

let secondOutput = prompt('Enter the arithmetic operator e.g. +, -, *, /, %, or **');

let firstNum = parseFloat(prompt('Enter the first number'));

let secondNum = parseFloat(prompt('Enter the second number'));

if (secondOutput == '+') {
    alert(firstNum + secondNum)
} else if (secondOutput == '-') {
    alert(firstNum - secondNum)
} else if (secondOutput == '*') {
    alert(firstNum * secondNum)
} else if (secondOutput == '/') {
    alert(firstNum / secondNum)
} else if (secondOutput == '%') {
    alert(firstNum % secondNum)
} else if (secondOutput == '**') {
    alert(firstNum ** secondNum)

} else {
    alert('Invalid Operation')
}

