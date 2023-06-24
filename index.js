let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite o segundo número:");

n1 = Number(n1);
n2 = Number(n2);

alert(`A soma dos dois números é ${n1 + n2}`);
alert(`A subtração entre esses dois números é ${n1 - n2}`);
alert(`A multiplicação desses números é ${n1 * n2}`);
alert(`A divisão entre eles é ${n1 / n2}`);
alert(`O resto da divisão é ${n1 % n2}`);

if((n1 + n2) % 2 == 0){
    alert(`A soma dos dois números é par: ${n1 + n2}`);
}else{
    alert(`A soma dos dois números é ímpar: ${n1 + n2}`);
}

if(n1 == n2){
    alert(`Os números inseridos são iguais`);
}else{
    alert(`Os números inseridos são diferentes`);
}