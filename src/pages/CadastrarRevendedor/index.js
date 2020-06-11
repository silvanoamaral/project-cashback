import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import InputSubmit from '../../components/InputSubmit'
import InputCustomizado from '../../components/InputCustomizado'

const CadastrarRevendedor = () => {
  const { register, handleSubmit, errors } = useForm()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const load = async data => {
    setLoading(true)
    const response = await axios({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/cadastro',
      method: 'post',
      data
    })

    if(response.status === 201) {
      setMessage('Cadastro realizado com successo ;)')
    } else {
      setMessage('Algo de errado não está certo, tente novamente.')
    }

    setLoading(false)
  }

  const verificarCadastro = async cpf => {
    setLoading(true)
    return await axios({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/cadastro',
      method: 'get'
    }).then(res => {
      setLoading(false)
      return Object.keys(res.data.filter(element => Number(element.cpf) === Number(cpf))).length
    })
  }

  const onSubmit = async data => {
    if(await verificarCadastro(data.cpf)) {
      setMessage(`O CPF ${data.cpf} está cadastrado`)
    } else {
      load(data)
    }
  }

  return(
    <div>
      {message &&
        <p>{message}</p>
      }
      <h2>Cadastrar revendedor(a)</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputCustomizado
          label='Nome completo'
          name='nome'
          inputRef={register}
          error={errors}
          message='Nome é obrigatório'
        />

        <InputCustomizado
          label='CPF'
          name='cpf'          
          inputRef={register}
          error={errors}
          message='CPF é obrigatório'
        />

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
          name='email'          
          inputRef={register}
          error={errors}
          message='Senha é obrigatório'
        />
        
        <InputSubmit
          loading={loading}
          label='Entrar'
        />
      </form>
    </div>
  )
}

export default CadastrarRevendedor