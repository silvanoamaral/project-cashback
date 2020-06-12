import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { makeStyles } from '@material-ui/core/styles'

import { maskPreco } from '../../utils/mask'
import { useApi } from '../../utils/useApi'

import MenuLateral from '../../components/MenuLateral'
import InputSubmit from '../../components/InputSubmit'
import InputCustomizado from '../../components/InputCustomizado'

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInputBase-input': {
      width: '100%',
      padding: '10px 0',
      textIndent: '10px',
      lineHeight: '1.5',
      color: '#495057',
    },
  },
  group: {
    flexDirection: 'row',

    '& .MuiTypography-body1': {
      fontSize: '13px',
    }
  },
}))

const CadastrarCompras = () => {
  const defaultValues = {
    status: '',
  }

  const { register, handleSubmit, setValue, control, reset, errors } = useForm({defaultValues})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const classes = useStyles()

  const onChangeInput = event => {
    setValue([{
      'valor': maskPreco(event.target.value)
    }])
  }

  const onSubmit = async data => {
    setLoading(true)
    const res = await useApi({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/comprar',
      method: 'post',
      data
    })

    if(res.status === 201) {
      setMessage('Compra registrada com sucesso.')
    } else {
      setMessage('Algo de errado não está certo, tente novamente.')
    }
    reset()
    setLoading(false)
  }

  return(
    <div className='content'>
      <MenuLateral />
      <div className='col'>
        <h2>Cadastrar Compras</h2>

        {message &&
          <p className='message'>{message}</p>
        }

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputCustomizado
            label='Código'
            name='codigo'
            type='text'      
            inputRef={register({ required: true })}
            error={errors}
            message='Código é obrigatório'
            max={10}
          />   
          <InputCustomizado
            label='Valor'
            name='valor'
            type='text' 
            onChange={onChangeInput}       
            inputRef={register({ required: true })}
            error={errors}
            message='Valor é obrigatório'
            max={10}
          />

          <div className='field'>
            <label>Data</label>
            <Controller
              as={
                <TextField
                  type='date'
                  className={classes.root}
                  variant='outlined'
                />
              }
              name='date'
              control={control}
              defaultValue=''
              rules={{ required: true }}
            />
            {errors.date &&
              <p className='error'>Data é obrigatório</p>
            }
          </div>

          <div className='field'>
            <label>Status da Comprar</label>
            <Controller
              as={
                <RadioGroup className={classes.group}>
                  <FormControlLabel value='sim' control={<Radio /> } label='Em validação' />
                  <FormControlLabel value='reprovado' control={<Radio /> } label='Reprovado' />
                  <FormControlLabel value='aprovado' control={<Radio /> } label='Aprovado' />
                </RadioGroup>
              }
              name='status'
              control={control}
              rules={{ required: true }}
            />
            {errors.status &&
              <p className='error'>Status da compra é obrigatório</p>
            }
          </div>

          <InputSubmit
            loading={loading}
            label='Cadastrar compras'
          />
        </form>
      </div>
    </div>
  )
}

export default CadastrarCompras