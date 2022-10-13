// 1
let num1 = parseInt(prompt('Digite um número:'));
let num2 = parseInt(prompt('Digite mais um número:'));
let diferenca = num1 - num2;
let diferencas = num2 - num1

if(num1 > num2){
    alert(`O maior número é ${num1} e a diferença é ${diferenca}`)
}else if(num2 > num1){
    alert(`O maior número é ${num2} e a diferença é ${diferencas}`)
}

//2
let n1 = parseFloat(prompt('Digite um número:'));
let n2 = parseFloat(prompt('Digite mais um número:'));

if(n1 > n2){
    alert(`O número ${n1} é maior que o número ${n2}`);
}else if(n1 == n2){
    alert('Números iguais');
}else{
    alert(`O número ${n2} é maior que o número ${n1}`);
}

//3
let salario = parseFloat(prompt('Digite seu salário'));
let emprestimo = parseFloat(prompt('Digite seu empréstimo'));

if(emprestimo >= (salario * 30 / 100)){
    alert('Emprestimo não concedido')
}else{
    alert('Emprestimo concedido')
}

//4
let numero1 = parseInt(prompt('Digite um número'));

if(numero1 % 3 == 0 && numero1 % 5 == 0){
    alert('Valor inválido')
}else if(numero1 % 3 == 0){
    alert('Valor divisível por 3')
}else if(numero1 % 5 == 0){
    alert('Valor divisível por 5')
}else if(numero1 % 2 == 0){
    alert('O número é par')
}else{
    alert('O número é impar')
}

//5
let semana = parseInt(prompt('Digite um número de 1 a 7'));

 if(semana == 1){
    alert('Domingo')
}else if(semana == 2){
    alert('Segunda-feira')
}else if(semana == 3){
    alert('Terça-feira')
}else if(semana == 4){
    alert('Quarta-feira')
}else if(semana == 5){
    alert('Quinta-feira')
}else if(semana == 6){
    alert('Sexta-feira')
}else if(semana == 7){
    alert('Sabádo')
}else{
    alert('Número inválido')
}

//6
let salario1 = parseFloat(prompt('Digite seu salário'));
let reajuste = parseFloat(prompt('Digite o reajuste anual'));

if(reajuste > 5){
    alert('Reajuste errado!')
}else{
    salarioAtual = (salario1 * reajuste) / 100
    salarioAtualizado = salario1 + salarioAtual
    alert(`O salário do funcionário corrigido é de ${salarioAtualizado}`)
}

7
let valorDolar = parseFloat(prompt('Digite quantos dolares'));
let real = valorDolar * 5.27;

let dolarReal = 5.27

alert(`$ ${valorDolar} é equivalente a R$ ${real} tendo ${dolarReal} como cotação`)

//8 TERMINAR DE FAZER
let tipoPluviacao = parseInt(prompt('Qual o tipo de praga: 1-Ervas daninhas; 2-Gafanhotos; 3-Broca; 4-Todos acima?'));
let tamanhoAcre = parseInt(prompt('Qual tamanho do acre?'));
let tipo1 = 50
let tipo2 = 100
let tipo3 = 150
let tipo4 = 250
let resultado = 0

if(tipoPluviacao == 1){
    resultado = tipo1 * tamanhoAcre
} 
if(tipoPluviacao == 2){
    resultado = tipo2 * tamanhoAcre
} 
if(tipoPluviacao == 3){
    resultado = tipo3 * tamanhoAcre
} 
if(tipoPluviacao == 4){
    resultado = tipo4 * tamanhoAcre
} 

if(tamanhoAcre >= 1000){
    let desconto2 = resultado * 0.05
    resultado = resultado - desconto2 
}
if(resultado > 750){
    resultado = resultado - 750 
    let desconto1 = resultado * 0.10
    resultado = resultado - desconto1 + 750
}

alert(`O valor a ser pago é de ${resultado.toFixed(2)}`);

//9
let tempo1 = parseInt(prompt('Qual o tempo gasto'));
let velocidade = parseInt(prompt('Qual a velocidade'))

let distancia = tempo1 * velocidade
let litrosUsados = distancia / 12

alert(`Seu veículo percorreu ${distancia} km a ${velocidade} km/h em ${tempo}h de viagem e consumiu ${litrosUsados.toFixed(2)}l de gasolina`)

//10
let valor = parseFloat(prompt('Digite o valor da sua prestação'));
let taxa = parseFloat(prompt('Digite o valor da taxa'));
let tempo = parseFloat(prompt('Quantos dias está em atraso?'));

let prestacao = valor + (valor * (taxa/100) * tempo)

if(tempo % 1 === 0){
    alert(`O valor a prestação atualizado é ${prestacao}`)
}else{
    alert('Valor inválido o tempo deve ser em dias')
}