// 01 - Crie um array que receba 5 itens e exiba no console.
let listaNomes = ["matheus", "daniel", "Lucas", "Marcela", "Gabriele"]

console.log(listaNomes)


// 02 - Utilize um método para adicionar um nome ao inicio do array.
let listaCores = ["azul", "amarelo", "rosa", "roxo"]

listaCores.unshift("verde")

console.log(listaCores)


// 03 - Utilize um método para remover o último nome do array.
let listaCarros = ["palio", "lamburguini", "fusca"]

listaCarros.pop()

console.log(listaCarros)


// 04 - Utilize um método para adicionar dois nomes ao fim do array.
let listaObjetos = ["tesoura", "prato"]

listaObjetos.push("garfo", "garrafa")

console.log(listaObjetos)


// 05 - Utilize um método para remover o primeiro nome do array.

let listaMarcas = ["samsung", "motorola", "xiaomi", "Apple"]

listaMarcas.shift()

console.log(listaMarcas)


// 06 - Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()

console.log(numbers)


// 07 - Crie um objeto que receba ao menos três propriedades sobre você.

let objeto = {
    nome: "Matheus",
    idade: 23,
    cidade: "Nilópolis"
}


// 08 - Adicione uma nova propriedade sem alterar seu objeto inicial.

objeto.profissão = "Desenvolvedor"

console.log(objeto)


// 09 - Remova uma propriedade desse objeto.

delete objeto.idade


// 10 - Mostre no console todas as propriedades desse objeto.

console.log(objeto)


/* 11- Crie um array chamado "cadastro" contendo ao menos 5 objetos. 
Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
Na propriedade amigos, adicione ao menos 4 itens. */

let cadastro = [ {nomee: "Marcio", idadee: 22, telefonee: 99999-9999, amigoss: ["joão", "Pedro", "Lucas", "Davi"]}]


// 12 - Mostre no console o nome de um amigo de cada lista.

console.log(cadastro.amigoss[1])
