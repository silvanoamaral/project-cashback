import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const CadastrarRevendedor = () => {
  const { register, handleSubmit, errors } = useForm()
  const [message, setMessage] = useState(null)

  const load = async data => {
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
  }

  const verificarCadastro = async cpf => {
    return await axios({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/cadastro',
      method: 'get'
    }).then(res => {
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
        <label>Nome completo</label>
        <input name="nome" ref={register({ required: true })} />
        {errors.nome && 'nome is required.'}

        <label>CPF</label>
        <input name="cpf" ref={register({ required: true })} />
        {errors.cpf && 'CPF is required.'}
        
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />

        <label>Senha</label>
        <input name="senha" ref={register({ required: true })} />
        {errors.senha && 'Senha is required.'}
        
        <input type="submit" disabled={loading} value={loading ? 'Aguarde...': 'Entrar'} />
      </form>
    </div>
  )
}

export default CadastrarRevendedor