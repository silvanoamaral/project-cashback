import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Login.scss'

import InputSubmit from '../../components/InputSubmit'
import InputCustomizado from '../../components/InputCustomizado'

const Login = props => {
  const { history } = props
  const { register, handleSubmit, errors } = useForm()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const verificarCadastro = async data => {
    setLoading(true)
    return await axios({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/cadastro',
      method: 'get'
    }).then(res => {
      const cond = res.data.filter(element =>
        element.email === data.email &&
        element.senha === data.senha
      )
      setLoading(false)
      return Object.keys(cond).length
    })
  }

  const onSubmit = async data => {
    if(await verificarCadastro(data)) {
      setMessage('Usuário cadastrado, direciona para página restrita')
      history.push('/comprar')
    } else {
      setMessage('Usuário não cadastrado.')
    }
  }

  return(
    <div>
      {message &&
        <p>{message}</p>
      }
      <h2>Entrar com e-mail e senha:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>       
        <InputCustomizado
          label='E-mail'
          type='email'
          name='email'          
          inputRef={register}
          error={errors}
          message='E-mail é obrigatório'
        />

        <InputCustomizado
          type='password'
          label='Senha'
          name='senha'          
          inputRef={register}
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