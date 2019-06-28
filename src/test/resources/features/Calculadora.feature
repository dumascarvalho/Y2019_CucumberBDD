# language: pt
@CalculadoraTeste
Funcionalidade: Operações da calculadora
	Como usuário devo informar 2 valores
	Com objetivo de obter o resultado a partir de uma operação
	
	Contexto: Inicializar a calculadora
	Dado que a calculadora seja inicializada
	
	Esquema do Cenario: Somar dois números
	Quando ser informado o primeiro número com o valor <primeiro_valor> 
	E informado o segundo número com o valor <segundo_valor>
	Então o resultado da soma deve ser <resultado>
	
	Exemplos:
	| primeiro_valor | segundo_valor | resultado |
	| 5 						 | 5 						 | 10 			 |
	| 10 						 | 10 					 | 20 			 |
  | 15 						 | 15 					 | 30 			 |
	| 25 						 | 25 					 | 50		     |
	
	Esquema do Cenario: Multiplicar dois números
	Quando ser informado o primeiro número com o valor <primeiro_valor> 
	E informado o segundo número com o valor <segundo_valor>
	Então o resultado da multiplicação deve ser <resultado>
	
	Exemplos:
	| primeiro_valor | segundo_valor | resultado |
	| 5 						 | 5 						 | 25 			 |
	| 10 						 | 10 					 | 100 			 |
  | 15 						 | 15 					 | 225 			 |
	| 25 						 | 25 					 | 625 			 |