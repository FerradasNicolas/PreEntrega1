function calculadoraDePromedios(trimestre1, trimestre2, trimestre3) {
  if (!trimestre1) {
    alert("Por favor vuelva a ingresar la nota del primer trimestre");
    return false;
  }
  if (!trimestre2) {
    alert("Por favor vuelva a ingresar la nota del segundo trimestre");
    return false;
  }
  if (!trimestre3) {
    alert("Por favor vuelva a ingresar la nota del tercer trimestre.");
    return false;
  }
  let promedio = (trimestre1 + trimestre2 + trimestre3) / 3;
  alert("Tu promedio es: " + promedio.toFixed(2));

  if (promedio <= 6) {
    alert("Lo siento, usted ha desaprobado");
  } else promedio >= 7;
  {
    alert("Felicidades ha promocionado la materia anual!");
  }
}
let valor1 = parseInt(prompt("Ingrese la nota del primer trimestre:"));
let valor2 = parseInt(prompt("Ingrese la nota del segundo trimestre:"));
let valor3 = parseInt(prompt("Ingrese la nota del tercer trimestre:"));

calculadoraDePromedios(valor1, valor2, valor3);
