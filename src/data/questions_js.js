const jsData = [
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
        tip: "É o JS sem frameworks",
      },
      {
        question: "Qual palavra-chave declara uma variável?",
        options: ["var", "let", "const", "Todas as anteriores"],
        answer: "Todas as anteriores",
        tip: "Existem três formas diferentes",
      },
      {
        question: "Qual método converte JSON em objeto?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "toObject()",
          "parseJSON()",
        ],
        answer: "JSON.parse()",
        tip: "É usado para leitura de dados",
      },
      {
        question: "Qual símbolo representa igualdade estrita?",
        options: ["==", "===", "=", "!=="],
        answer: "===",
        tip: "Compara valor e tipo",
      },
      {
        question: "Qual função mostra algo no console?",
        options: ["print()", "log()", "console.log()", "alert()"],
        answer: "console.log()",
        tip: "É usada para debug",
      },
    ],
  },
];

export default jsData;
