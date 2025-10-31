/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  Una propiedad titular con el valor "Alex".
  Una propiedad saldo, teniendo como valor inicial 0.
  Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  
  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  //Ingresar o Extraer
  ingresar(valor) {
    this.saldo = this.saldo + valor;
    console.log(`Se ingresó $${valor} a la cuenta de ${this.titular}`);

    this.informar();
  }
  extraer(valor) {
    if (valor > this.saldo) {
      console.log("No tiene saldo suficiente para completar la operación");
    } else {
      this.saldo = this.saldo - valor;
      console.log(`Se retiró $${valor} a la cuenta de ${this.titular}`);

      this.informar();
    }
  }

  //Informar estado de la cuenta
  informar() {
    console.log(
      `la cuenta de ${this.titular} contiene $${this.saldo} de saldo`
    );
  }
}

// ejercicio realizado en conjunto con SkyBreakk
