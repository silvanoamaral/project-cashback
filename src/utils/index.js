const calcularCashBack = valor => {
  const desconto = (parseFloat(valor) / 100) * 5
  return desconto.toFixed(2).toString().replace('.', ',')
}

const formatDate = str => new Date(str).toLocaleDateString()

export {
  formatDate,
  calcularCashBack
}
