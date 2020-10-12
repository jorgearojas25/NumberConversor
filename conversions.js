let espacioResultado = document.getElementById("results");
let accionConvertir = document
  .getElementById("Convertir")
  .addEventListener("click", () => {
    let sistemaInicial = document.getElementById("sistema1").value;
    let sistemaFinal = document.getElementById("sistema2").value;
    let resultado = "";
    console.log([sistemaInicial, sistemaFinal]);
    switch (sistemaInicial) {
      case "1":
        resultado = ConversionesBinarias(
          sistemaFinal,
          document.getElementById("numero").value
        );
        break;
      case "2":
        resultado = ConversionesOctales(
          sistemaFinal,
          document.getElementById("numero").value
        );
        break;
      case "3":
        resultado = ConversionesDecimales(
          sistemaFinal,
          document.getElementById("numero").value
        );
        break;
      case "4":
        resultado = ConversionesHex(
          sistemaFinal,
          document.getElementById("numero").value
        );
        break;

      default:
        alert("Sistema no aceptado");
        break;
    }

    console.log(["resultado", resultado]);
    espacioResultado.innerText = resultado.toString();
  });

const ConversionesBinarias = (sistemaFinal, numero) => {
  switch (sistemaFinal) {
    case "1":
      return numero;
    case "2":
      return parseInt(numero, 2).toString(8);
    case "3":
      return parseInt(numero, 2);
    case "4":
      return parseInt(numero, 2).toString(16);
    default:
      alert("Sistema no aceptado");
      break;
  }
};

const ConversionesOctales = (sistemaFinal, numero) => {
  switch (sistemaFinal) {
    case "1":
      return parseInt(numero, 8).toString(2);
    case "2":
      return numero;
    case "3":
      return parseInt(numero, 8);
    case "4":
      return parseInt(numero, 8).toString(16);
    default:
      alert("Sistema no aceptado");
      break;
  }
};

const ConversionesDecimales = (sistemaFinal, numero) => {
  numero = Number(numero);
  switch (sistemaFinal) {
    case "1":
      return numero.toString(2);
    case "2":
      return numero.toString(8);
    case "3":
      return numero;
    case "4":
      return numero.toString(16);
    default:
      alert("Sistema no aceptado");
      break;
  }
};

const ConversionesHex = (sistemaFinal, numero) => {
  switch (sistemaFinal) {
    case "1":
      return parseInt(numero, 16).toString(2);
    case "2":
      return parseInt(numero, 16).toString(8);
    case "3":
      return parseInt(numero, 16);
    case "4":
      return numero;
    default:
      alert("Sistema no aceptado");
      break;
  }
};
