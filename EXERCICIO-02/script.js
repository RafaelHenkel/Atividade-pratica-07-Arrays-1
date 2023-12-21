// Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

let numerosArray = [1, 25, 67, 101, 133];
let soma = 0;
// for (let i = 0; i < numerosArray.length; i++) {
//   soma += numerosArray[i];
//   document.write(soma, "<br>");
// }

for (const numeros of numerosArray) {
  soma += numeros;
  document.write(soma, "<br>");
}
