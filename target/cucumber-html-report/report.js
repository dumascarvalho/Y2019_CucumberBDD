$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Calculadora.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Operações da calculadora",
  "description": "Como usuário devo informar 2 valores\r\nCom objetivo de obter o resultado a partir de uma operação",
  "id": "operações-da-calculadora",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@CalculadoraTeste"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Somar dois números",
  "description": "",
  "id": "operações-da-calculadora;somar-dois-números",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 11,
  "name": "ser informado o primeiro número com o valor \u003cprimeiro_valor\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informado o segundo número com o valor \u003csegundo_valor\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o resultado da soma deve ser \u003cresultado\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "operações-da-calculadora;somar-dois-números;",
  "rows": [
    {
      "cells": [
        "primeiro_valor",
        "segundo_valor",
        "resultado"
      ],
      "line": 16,
      "id": "operações-da-calculadora;somar-dois-números;;1"
    },
    {
      "cells": [
        "5",
        "5",
        "10"
      ],
      "line": 17,
      "id": "operações-da-calculadora;somar-dois-números;;2"
    },
    {
      "cells": [
        "10",
        "10",
        "20"
      ],
      "line": 18,
      "id": "operações-da-calculadora;somar-dois-números;;3"
    },
    {
      "cells": [
        "15",
        "15",
        "30"
      ],
      "line": 19,
      "id": "operações-da-calculadora;somar-dois-números;;4"
    },
    {
      "cells": [
        "25",
        "25",
        "50"
      ],
      "line": 20,
      "id": "operações-da-calculadora;somar-dois-números;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 7,
  "name": "Inicializar a calculadora",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que a calculadora seja inicializada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_a_calculadora_seja_inicializada()"
});
formatter.result({
  "duration": 73183800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Somar dois números",
  "description": "",
  "id": "operações-da-calculadora;somar-dois-números;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CalculadoraTeste"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "ser informado o primeiro número com o valor 5",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informado o segundo número com o valor 5",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o resultado da soma deve ser 10",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 44
    }
  ],
  "location": "CalculadoraSteps.ser_informado_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 1419600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "CalculadoraSteps.informado_o_segundo_número_com_o_valor(int)"
});
formatter.result({
  "duration": 77200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 29
    }
  ],
  "location": "CalculadoraSteps.o_resultado_da_soma_deve_ser(int)"
});
formatter.result({
  "duration": 1145800,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Inicializar a calculadora",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que a calculadora seja inicializada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_a_calculadora_seja_inicializada()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Somar dois números",
  "description": "",
  "id": "operações-da-calculadora;somar-dois-números;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CalculadoraTeste"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "ser informado o primeiro número com o valor 10",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informado o segundo número com o valor 10",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o resultado da soma deve ser 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 44
    }
  ],
  "location": "CalculadoraSteps.ser_informado_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 60600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 39
    }
  ],
  "location": "CalculadoraSteps.informado_o_segundo_número_com_o_valor(int)"
});
formatter.result({
  "duration": 48900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 29
    }
  ],
  "location": "CalculadoraSteps.o_resultado_da_soma_deve_ser(int)"
});
formatter.result({
  "duration": 62100,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Inicializar a calculadora",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que a calculadora seja inicializada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_a_calculadora_seja_inicializada()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Somar dois números",
  "description": "",
  "id": "operações-da-calculadora;somar-dois-números;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CalculadoraTeste"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "ser informado o primeiro número com o valor 15",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informado o segundo número com o valor 15",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o resultado da soma deve ser 30",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 44
    }
  ],
  "location": "CalculadoraSteps.ser_informado_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 74100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 39
    }
  ],
  "location": "CalculadoraSteps.informado_o_segundo_número_com_o_valor(int)"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 29
    }
  ],
  "location": "CalculadoraSteps.o_resultado_da_soma_deve_ser(int)"
});
formatter.result({
  "duration": 90800,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Inicializar a calculadora",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que a calculadora seja inicializada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_a_calculadora_seja_inicializada()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Somar dois números",
  "description": "",
  "id": "operações-da-calculadora;somar-dois-números;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CalculadoraTeste"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "ser informado o primeiro número com o valor 25",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informado o segundo número com o valor 25",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o resultado da soma deve ser 50",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 44
    }
  ],
  "location": "CalculadoraSteps.ser_informado_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 92200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 39
    }
  ],
  "location": "CalculadoraSteps.informado_o_segundo_número_com_o_valor(int)"
});
formatter.result({
  "duration": 65600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 29
    }
  ],
  "location": "CalculadoraSteps.o_resultado_da_soma_deve_ser(int)"
});
formatter.result({
  "duration": 67400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Multiplicar dois números",
  "description": "",
  "id": "operações-da-calculadora;multiplicar-dois-números",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 23,
  "name": "ser informado o primeiro número com o valor \u003cprimeiro_valor\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "informado o segundo número com o valor \u003csegundo_valor\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o resultado da multiplicação deve ser \u003cresultado\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "operações-da-calculadora;multiplicar-dois-números;",
  "rows": [
    {
      "cells": [
        "primeiro_valor",
        "segundo_valor",
        "resultado"
      ],
      "line": 28,
      "id": "operações-da-calculadora;multiplicar-dois-números;;1"
    },
    {
      "cells": [
        "5",
        "5",
        "25"
      ],
      "line": 29,
      "id": "operações-da-calculadora;multiplicar-dois-números;;2"
    },
    {
      "cells": [
        "10",
        "10",
        "100"
      ],
      "line": 30,
      "id": "operações-da-calculadora;multiplicar-dois-números;;3"
    },
    {
      "cells": [
        "15",
        "15",
        "225"
      ],
      "line": 31,
      "id": "operações-da-calculadora;multiplicar-dois-números;;4"
    },
    {
      "cells": [
        "25",
        "25",
        "625"
      ],
      "line": 32,
      "id": "operações-da-calculadora;multiplicar-dois-números;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 7,
  "name": "Inicializar a calculadora",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que a calculadora seja inicializada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_a_calculadora_seja_inicializada()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Multiplicar dois números",
  "description": "",
  "id": "operações-da-calculadora;multiplicar-dois-números;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CalculadoraTeste"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "ser informado o primeiro número com o valor 5",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "informado o segundo número com o valor 5",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o resultado da multiplicação deve ser 25",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 44
    }
  ],
  "location": "CalculadoraSteps.ser_informado_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 96300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "CalculadoraSteps.informado_o_segundo_número_com_o_valor(int)"
});
formatter.result({
  "duration": 61300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 38
    }
  ],
  "location": "CalculadoraSteps.o_resultado_da_multiplicação_deve_ser(int)"
});
formatter.result({
  "duration": 68700,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Inicializar a calculadora",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que a calculadora seja inicializada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_a_calculadora_seja_inicializada()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Multiplicar dois números",
  "description": "",
  "id": "operações-da-calculadora;multiplicar-dois-números;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CalculadoraTeste"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "ser informado o primeiro número com o valor 10",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "informado o segundo número com o valor 10",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o resultado da multiplicação deve ser 100",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 44
    }
  ],
  "location": "CalculadoraSteps.ser_informado_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 82800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 39
    }
  ],
  "location": "CalculadoraSteps.informado_o_segundo_número_com_o_valor(int)"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 38
    }
  ],
  "location": "CalculadoraSteps.o_resultado_da_multiplicação_deve_ser(int)"
});
formatter.result({
  "duration": 78300,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Inicializar a calculadora",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que a calculadora seja inicializada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_a_calculadora_seja_inicializada()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Multiplicar dois números",
  "description": "",
  "id": "operações-da-calculadora;multiplicar-dois-números;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CalculadoraTeste"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "ser informado o primeiro número com o valor 15",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "informado o segundo número com o valor 15",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o resultado da multiplicação deve ser 225",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 44
    }
  ],
  "location": "CalculadoraSteps.ser_informado_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 71000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 39
    }
  ],
  "location": "CalculadoraSteps.informado_o_segundo_número_com_o_valor(int)"
});
formatter.result({
  "duration": 66600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "225",
      "offset": 38
    }
  ],
  "location": "CalculadoraSteps.o_resultado_da_multiplicação_deve_ser(int)"
});
formatter.result({
  "duration": 64900,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Inicializar a calculadora",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que a calculadora seja inicializada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_a_calculadora_seja_inicializada()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Multiplicar dois números",
  "description": "",
  "id": "operações-da-calculadora;multiplicar-dois-números;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CalculadoraTeste"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "ser informado o primeiro número com o valor 25",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "informado o segundo número com o valor 25",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o resultado da multiplicação deve ser 625",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 44
    }
  ],
  "location": "CalculadoraSteps.ser_informado_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 84000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 39
    }
  ],
  "location": "CalculadoraSteps.informado_o_segundo_número_com_o_valor(int)"
});
formatter.result({
  "duration": 66800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "625",
      "offset": 38
    }
  ],
  "location": "CalculadoraSteps.o_resultado_da_multiplicação_deve_ser(int)"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
});