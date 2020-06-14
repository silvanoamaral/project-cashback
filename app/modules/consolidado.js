const axios = require('axios')

const urlBase = 'https://5e0e83b236b80000143dbd0e.mockapi.io/api'

const consolidado = async (req, res, next) => {
  try {
    const response = await axios({
      url: `${urlBase}/comprar`,
      method: 'get'
    })

    const isAprovado = (valor, status) => {
      if(status === 'Aprovado')
        return parseFloat(valor)
      else
        return 0
    }

    const formatValor = str => {
      let value = str.toString().replace( /\D/g , "")
      value = value.replace(/([0-9]{2})$/g, ",$1")
      if(value.length > 6)
        value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")

      return value
    }

    const total = response.data.reduce((a, {valor, status}) => a + isAprovado(valor, status), 0)

    res.send(formatValor(total.toFixed(2)))
  } catch(error) {
    next({})
  }
}

module.exports = {
  consolidado
}