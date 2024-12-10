// =======================
// 1. Variáveis e Tipos
// =======================
// Declaração de variáveis
let nome = "João"; // Tipo String
const idade = 30;  // Tipo Número (imutável)
var ativo = true;  // Tipo Boolean (evite usar var)

// Exibição no console
console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);

// Tipos de dados
let indefinido; // undefined
let nulo = null; // null
let numeroGrande = BigInt(12345678901234567890); // BigInt
let simbolo = Symbol("identificador"); // Symbol

// =======================
// 2. Operadores
// =======================
// Operadores Matemáticos
console.log(5 + 3);  // Adição
console.log(5 - 3);  // Subtração
console.log(5 * 3);  // Multiplicação
console.log(5 / 3);  // Divisão
console.log(5 % 3);  // Resto da divisão
console.log(5 ** 2); // Potenciação

// Operadores Comparativos
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 == '5'); // true (compara valores)
console.log(5 === '5'); // false (compara valor e tipo)

// Operadores Lógicos
console.log(true && false); // AND (false)
console.log(true || false); // OR (true)
console.log(!true);         // NOT (false)

// =======================
// 3. Estruturas Condicionais
// =======================
let nota = 85;
if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Operador Ternário
let status = nota >= 70 ? "Aprovado" : "Reprovado";
console.log(status);

// =======================
// 4. Loops
// =======================
// For
for (let i = 0; i < 5; i++) {
    console.log(`Iteração ${i}`);
}

// While
let contador = 0;
while (contador < 5) {
    console.log(`Contando: ${contador}`);
    contador++;
}

// Do While
let tentativas = 0;
do {
    console.log(`Tentativa ${tentativas}`);
    tentativas++;
} while (tentativas < 3);

// For Of (para arrays ou iteráveis)
for (let fruta of ["Maçã", "Banana", "Laranja"]) {
    console.log(fruta);
}

// For In (para objetos)
let pessoa = { nome: "Ana", idade: 22 };
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// =======================
// 5. Arrays
// =======================
let frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Manga");   // Adiciona ao final
frutas.pop();            // Remove o último
frutas.unshift("Morango"); // Adiciona ao início
frutas.shift();          // Remove o primeiro
console.log(frutas);

// Métodos úteis
console.log(frutas.includes("Maçã"));  // true
console.log(frutas.indexOf("Banana")); // Índice 0
console.log(frutas.slice(1, 3));       // Subarray ["Banana", "Laranja"]
console.log(frutas.join(", "));       // String: "Banana, Laranja"

// =======================
// 6. Funções
// =======================
// Função tradicional
function somar(a, b) {
    return a + b;
}
console.log(somar(2, 3));

// Função anônima
const subtrair = function (a, b) {
    return a - b;
};
console.log(subtrair(5, 3));

// Arrow Function
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2));

// =======================
// 7. Objetos
// =======================
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    acelerar: function () {
        console.log("O carro está acelerando...");
    }
};
console.log(carro.marca);
carro.acelerar();

// =======================
// 8. Classes e POO
// =======================
class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    emitirSom() {
        console.log(`${this.nome} está emitindo som.`);
    }
}

let cachorro = new Animal("Rex", "Cachorro");
cachorro.emitirSom();

// =======================
// 9. Manipulação de Strings
// =======================
let texto = "Aprendendo JavaScript!";
console.log(texto.length);              // Comprimento
console.log(texto.toUpperCase());       // Maiúsculas
console.log(texto.toLowerCase());       // Minúsculas
console.log(texto.replace("JavaScript", "JS")); // Substituir
console.log(texto.split(" "));         // Dividir por espaço

// =======================
// 10. Manipulação de Datas
// =======================
let hoje = new Date();
console.log(hoje.toDateString());       // Data simplificada
console.log(hoje.toISOString());        // ISO 8601
console.log(hoje.getFullYear());        // Ano
console.log(hoje.getMonth() + 1);       // Mês (0-indexado)
console.log(hoje.getDate());            // Dia

// =======================
// 11. Promises e Async/Await
// =======================
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function exemploAssincrono() {
    console.log("Início");
    await esperar(2000); // Espera 2 segundos
    console.log("Fim após 2 segundos");
}
exemploAssincrono();

// =======================
// 12. Manipulação do DOM
// =======================
// Adicionando um elemento ao DOM
let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este é um parágrafo criado dinamicamente.";
document.body.appendChild(novoParagrafo);

// =======================
// 13. Tratamento de Erros
// =======================
try {
    throw new Error("Erro proposital");
} catch (erro) {
    console.error("Erro capturado:", erro.message);
} finally {
    console.log("Sempre executado");
}
