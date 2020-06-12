import axios from 'axios'

const useApi = async config => {
  try {
    const response = await axios({
      ...config
    })

    return response
  } catch (error) {
    return error
  }
}

export {
  useApi
}