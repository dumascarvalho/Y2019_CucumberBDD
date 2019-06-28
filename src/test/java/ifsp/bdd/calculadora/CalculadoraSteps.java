package ifsp.bdd.calculadora;

import static org.junit.Assert.*;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Quando;
import cucumber.api.java.pt.Então;

public class CalculadoraSteps {
	
	Calculadora calculadora;
	int a, b;

	// Compartilhado
	
	@Dado("^que a calculadora seja inicializada$")
	public void que_a_calculadora_seja_inicializada() throws Throwable {
	    calculadora = new Calculadora();
	}

	@Quando("^ser informado o primeiro número com o valor (\\d+)$")
	public void ser_informado_o_primeiro_número_com_o_valor(int arg1) throws Throwable {
	    a = arg1;

	}

	@Quando("^informado o segundo número com o valor (\\d+)$")
	public void informado_o_segundo_número_com_o_valor(int arg1) throws Throwable {
	    b = arg1;
	}
	
	// Operação Soma

	@Então("^o resultado da soma deve ser (\\d+)$")
	public void o_resultado_da_soma_deve_ser(int arg1) throws Throwable {
		assertEquals(arg1, calculadora.somarNumeros(a, b));
	}
	
	// Operação Multiplicação

	@Então("^o resultado da multiplicação deve ser (\\d+)$")
	public void o_resultado_da_multiplicação_deve_ser(int arg1) throws Throwable {
		assertEquals(arg1, calculadora.multiplicarNumeros(a, b));
	}

}