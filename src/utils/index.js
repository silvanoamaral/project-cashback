const calcularCashBack = valor => {
  const desconto = (parseFloat(valor) / 100) *5
  return desconto.toFixed(2).toString().replace('.',',')
}

const formatDate = str => {
  const date = new Date(str).toLocaleDateString()
  return date
}

export {
  formatDate,
  calcularCashBack
}