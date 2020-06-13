import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { maskCpf } from '../../utils/mask'
import { useApi } from '../../utils/useApi'
import config from '../../../config'

import MessageAlert from '../../components/MessageAlert'
import InputSubmit from '../../components/InputSubmit'
import InputCustomizado from '../../components/InputCustomizado'

const CadastrarRevendedor = () => {
  const { register, handleSubmit, setValue, reset, errors } = useForm()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const load = async data => {
    setLoading(true)
    const response = await useApi({
      url: `${config.urlBase}/revendedores`,
      method: 'post',
      data
    })

    if(response.status === 201) {
      setMessage({
        text: 'Cadastro realizado com successo ;)',
        error: false
      })
      reset()
    } else {
      setMessage({
        text: 'Algo de errado não está certo, tente novamente.',
        error: true
      })
    }

    setLoading(false)
  }

  const verificarCadastro = async cpf => {
    setLoading(true)
    const res = await useApi({
      url: `${config.urlBase}/revendedores`,
      method: 'get'
    })
    return Object.keys(res.data.filter(element => element.cpf === cpf)).length    
  }

  const onSubmit = async data => {
    if(await verificarCadastro(data.cpf)) {
      setMessage({
        text: `O CPF ${data.cpf}, já existente.`,
        error: true
      })
      setLoading(false)
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
          <MessageAlert {...message} />
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