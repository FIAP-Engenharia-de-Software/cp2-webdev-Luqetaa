// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  let resultado
  if (nota >= 6)
    resultado = "Aprovado"
  else if (nota < 6)
    resultado = "Reprovado"
  else (nota > 10)
  resultado = "Nota inválida"
  return resultado
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };