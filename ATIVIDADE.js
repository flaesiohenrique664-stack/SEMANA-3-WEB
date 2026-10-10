/**
 * ENTREGÁVEL DE DESENVOLVIMENTO WEB – INTRODUÇÃO AO JAVASCRIPT (SEMANA 03)
 * Este arquivo cobre os blocos: Variáveis e Tipos, Funções e Controle de Fluxo.
 */

console.log("=== BLOCO 1: FUNDAMENTOS E VARIÁVEIS ===");

// 1. Variável let com valor inicial, adição e exibição
let pontos = 50;
pontos += 10; // Adiciona 10 (pontos agora é 60)
console.log("Pontos atuais:", pontos);

// 2. Constante MAX_PONTOS e demonstração de TypeError
const MAX_PONTOS = 100;
console.log("Máximo de pontos permitido:", MAX_PONTOS);

try {
  MAX_PONTOS = 150; // Tentativa de reatribuição gera TypeError
} catch (erro) {
  console.error("Erro capturado ao tentar reatribuir const:", erro.message);
  // Explicação: Variáveis declaradas com 'const' possuem escopo de bloco e não podem ter seu valor reatribuído após a inicialização.
}

// 3. Tipos primitivos e operador typeof
const tipoString = "Olá, Mundo!";
const tipoNumber = 42;
const tipoBoolean = true;
let tipoUndefined;
const tipoNull = null;

console.log("typeof string:", typeof tipoString);       // string
console.log("typeof number:", typeof tipoNumber);       // number
console.log("typeof boolean:", typeof tipoBoolean);     // boolean
console.log("typeof undefined:", typeof tipoUndefined); // undefined
console.log("typeof null:", typeof tipoNull);           // object (bug histórico do JS)

// 4. Template Literals vs Concatenação (+)
const nomeUsuario = "Carlos";
const nivel = "Intermediário";

// Com Template Literals (crase e ${})
const fraseTemplate = `O usuário ${nomeUsuario} atingiu o nível ${nivel} com ${pontos} pontos.`;
console.log("Template Literal:", fraseTemplate);

// Com Concatenação tradicional (+)
const fraseConcatenacao = "O usuário " + nomeUsuario + " atingiu o nível " + nivel + " com " + pontos + " pontos.";
console.log("Concatenação:", fraseConcatenacao);


console.log("\n=== BLOCO 2: FUNÇÕES ===");

// 1. Função Declarada e Teste de Hoisting
// Chamando antes da declaração (funciona devido ao hoisting)
console.log("É maior de idade (18) [Função Declarada]:", ehMaiorDeIdade(18));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

// 2. Função de Expressão e Teste de ReferenceError
try {
  // Tentando chamar antes da declaração (gera ReferenceError)
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.error("Erro capturado com função de expressão antes de declarar:", erro.message);
}

const ehMaiorDeIdadeExpressao = function(idade) {
  return idade >= 18;
};
console.log("É maior de idade (20) [Função de Expressão]:", ehMaiorDeIdadeExpressao(20));

// 3. Função dobro nas três formas
// A) Declarada
function dobroDeclarada(n) {
  return n * 2;
}

// B) Expressão
const dobroExpressao = function(n) {
  return n * 2;
};

// C) Arrow Function (forma curta)
const dobroArrow = n => n * 2;

console.log("Dobro (Declarada):", dobroDeclarada(5));
console.log("Dobro (Expressão):", dobroExpressao(5));
console.log("Dobro (Arrow):", dobroArrow(5));

// 4. Parâmetro com valor padrão
function calcularPrecoComDesconto(preco, desconto = 0.1) {
  return preco - (preco * desconto);
}
console.log("Preço com desconto padrão (100, sem argumento):", calcularPrecoComDesconto(100));
console.log("Preço com desconto customizado (100, 0.2):", calcularPrecoComDesconto(100, 0.2));


console.log("\n=== BLOCO 3: CONTROLE DE FLUXO ===");

// 1. Função classificarNota com if/else
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log("Nota 7.5:", classificarNota(7.5));
console.log("Nota 4.0:", classificarNota(4.0));

// 2. Estrutura switch para semáforo
const corSemaforo = "verde";
switch (corSemaforo.toLowerCase()) {
  case "vermelho":
    console.log("Semáforo Vermelho: Pare");
    break;
  case "amarelo":
    console.log("Semáforo Amarelo: Atenção");
    break;
  case "verde":
    console.log("Semáforo Verde: Siga");
    break;
  default:
    console.log("Cor inválida");
}

// 3. Tabuada do 5 usando for clássico
console.log("Tabuada do 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Contagem regressiva de 5 até 1 usando while
console.log("Contagem regressiva:");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

// 5. Números de 1 a 20 (Par ou Ímpar) com for e while
console.log("--- Verificação com FOR (1 a 20) ---");
for (let i = 1; i <= 20; i++) {
  const status = (i % 2 === 0) ? "par" : "ímpar";
  console.log(`${i} é ${status}`);
}

console.log("--- Verificação com WHILE (1 a 20) ---");
let numeroWhile = 1;
while (numeroWhile <= 20) {
  const status = (numeroWhile % 2 === 0) ? "par" : "ímpar";
  console.log(`${numeroWhile} é ${status}`);
  numeroWhile++;
}

// 6. Função diaDaSemana com switch e default
function diaDaSemana(numero) {
  switch (numero) {
    case 1: return "Domingo";
    case 2: return "Segunda-feira";
    case 3: return "Terça-feira";
    case 4: return "Quarta-feira";
    case 5: return "Quinta-feira";
    case 6: return "Sexta-feira";
    case 7: return "Sábado";
    default: return "Dia inválido (informe um número de 1 a 7)";
  }
}

console.log("Dia 3:", diaDaSemana(3));
console.log("Dia 8:", diaDaSemana(8));