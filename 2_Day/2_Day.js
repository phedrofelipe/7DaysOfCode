const nome = prompt("Digite o seu nome completo:");
const idade = prompt("Digite sua idade:");
const linguagem = prompt("Qual linguagem de programação você está estudando no momento?");

document.querySelector('.nome').innerHTML = nome;
document.querySelector('.idade').innerHTML = idade;
document.querySelector('.linguagem').innerHTML = linguagem;