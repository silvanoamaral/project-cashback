const maskPreco = str => {
  let value = str.replace(/\D/g, '')
  value = value.replace(/([0-9]{2})$/g, ',$1')
  if (value.length > 6) {
    value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
  }

  return value
}

const maskCpf = str => {
  const cpf = str.replace(/\D/g, '')
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export {
  maskPreco,
  maskCpf
}
