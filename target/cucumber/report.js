$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calculadora.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 2,
  "name": "Operações da calculadora",
  "description": "Como usuário devo informar 2 valores\r\nCom objetivo de obter o resultado a partir de um cálculo",
  "id": "operações-da-calculadora",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Somando dois números",
  "description": "",
  "id": "operações-da-calculadora;somando-dois-números",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "que seja escolhida a operação de soma",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "ser informado o primeiro número com o valor \u00275\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "informado o segundo número com o valor \u00275\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "o resultado da soma deve ser \u002710\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculadoraPassos.que_seja_escolhida_a_operação_de_soma()"
});
formatter.result({
  "duration": 82191800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 45
    }
  ],
  "location": "CalculadoraPassos.ser_informado_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 1271000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 40
    }
  ],
  "location": "CalculadoraPassos.informado_o_segundo_número_com_o_valor(int)"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 30
    }
  ],
  "location": "CalculadoraPassos.o_resultado_da_soma_deve_ser(int)"
});
formatter.result({
  "duration": 1157400,
  "status": "passed"
});
});