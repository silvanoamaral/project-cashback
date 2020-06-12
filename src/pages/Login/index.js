import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import './Login.scss'

import { useApi } from '../../utils/useApi'

import InputSubmit from '../../components/InputSubmit'
import InputCustomizado from '../../components/InputCustomizado'

const Login = props => {
  const { history } = props
  const { register, handleSubmit, errors } = useForm()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const verificarCadastro = async data => {
    setLoading(true)
    const res = await useApi({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/revendedores',
      method: 'get'
    })

    const cond = res.data.filter(element =>
      element.email === data.email &&
      element.senha === data.senha
    )
    setLoading(false)
    return Object.keys(cond).length
  }

  const onSubmit = async data => {
    if(await verificarCadastro(data)) {
      setMessage('Usuário cadastrado, direciona para página restrita')
      history.push('/listagem-compras')
    } else {
      setMessage('Usuário ou senha inválidos')
    }
  }

  return(
    <div>
      <h2>Entrar com e-mail e senha:</h2>

      {message &&
        <p className='message alert'>{message}</p>
      }
      
      <form onSubmit={handleSubmit(onSubmit)}>       
        <InputCustomizado
          label='E-mail'
          name='email'          
          inputRef={
            register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
              }
            })
          }
          error={errors}
          message='E-mail é obrigatório'
        />

        <InputCustomizado
          type='password'
          label='Senha'
          name='senha'          
          inputRef={register({ required: true })}
          error={errors}
          message='Senha é obrigatório'
        />

        <InputSubmit
          loading={loading}
          label='Acessar Conta'
        />
      </form>

      <p className='link__cadastrar'>Não tem uma conta? <Link to='/cadastrar-revendedor'>Cadastre-se</Link></p>
    </div>
  )
}

export default Login

Login.propTypes = {
  history: PropTypes.object,
}