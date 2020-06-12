import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { maskCpf } from '../../utils/mask'

import InputSubmit from '../../components/InputSubmit'
import InputCustomizado from '../../components/InputCustomizado'

const CadastrarRevendedor = () => {
  const { register, handleSubmit, setValue, reset, errors } = useForm()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const load = async data => {
    setLoading(true)
    const response = await axios({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/revendedores',
      method: 'post',
      data
    })

    setLoading(false)

    if(response.status === 201) {
      setMessage('Cadastro realizado com successo ;)')
      reset()
      document.querySelector('form').querySelectorAll('input')[0].focus()
    } else {
      setMessage('Algo de errado não está certo, tente novamente.')
    }
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
      setMessage(`O CPF ${data.cpf}, já existente.`)
    } else {
      load(data)
    }
  }

  const onChangeInput = event => {
    setValue([{
      'cpf': maskCpf(event.target.value)
    }])
  }

  return(
    <div className='content'>
      <div className='col'>
        <h2>Cadastrar revendedor(a)</h2>

        {message &&
          <p className='message'>{message}</p>
        }

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputCustomizado
            label='Nome completo'
            name='nome'
            inputRef={register({ required: true }) }
            error={errors}
            message='Nome é obrigatório'
          />

          <InputCustomizado
            label='CPF'
            name='cpf'
            type="type"
            inputRef={register({ required: true })}
            error={errors}
            message='CPF é obrigatório'
            onChange={onChangeInput}
            max={11}
          />

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
            label='Cadastrar'
          />
        </form>
      </div>
    </div>
  )
}

export default CadastrarRevendedor