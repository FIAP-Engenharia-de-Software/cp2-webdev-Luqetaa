// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  let resultado
  calculo = peso / (altura * altura)
  if (calculo < 18.5)
    resultado = "Abaixo do peso"
  else if (calculo <= 24.9)
    resultado = "Peso normal"
  else if (calculo <= 29.9)
    resultado = "Sobrepeso"
  if (calculo >= 30)
    resultado = "Obesidade"
  if (calculo = undefined && null && NaN)
    resultado = "Erro"
  return resultado
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };