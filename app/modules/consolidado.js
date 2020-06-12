const axios = require('axios')

const urlBase = 'https://5e0e83b236b80000143dbd0e.mockapi.io/api'

const consolidado = async (req, res, next) => {
  try {
    const response = await axios({
      url: `${urlBase}/comprar`,
      method: 'get'
    })

    const total = response.data.reduce((a, {valor}) => a + parseFloat(valor), 0)

    res.send(total.toFixed(2))
  } catch(error) {
    next({})
  }
}

module.exports = {
  consolidado
}