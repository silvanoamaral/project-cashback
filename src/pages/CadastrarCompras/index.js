import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { makeStyles } from '@material-ui/core/styles'

import { maskPreco } from '../../utils/mask'
import { useApi } from '../../utils/useApi'
import config from '../../../config'

import MessageAlert from '../../components/MessageAlert'
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
      color: '#495057'
    }
  },
  group: {
    flexDirection: 'row',

    '& .MuiTypography-body1': {
      fontSize: '13px'
    }
  }
}))

const CadastrarCompras = () => {
  const defaultValues = {
    status: ''
  }

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    errors
  } = useForm({ defaultValues })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const classes = useStyles()

  const onChangeInput = event => {
    setValue([{
      valor: maskPreco(event.target.value)
    }])
  }

  const onSubmit = async data => {
    setLoading(true)
    const res = await useApi({
      url: `${config.urlBase}/comprar`,
      method: 'post',
      data
    })

    if (res.status === 201) {
      setMessage({
        text: 'Compra registrada com sucesso.',
        error: false
      })
    } else {
      setMessage({
        text: 'Algo de errado não está certo, tente novamente.',
        error: true
      })
    }
    reset()
    setLoading(false)
  }

  return (
    <div className='content'>
      <MenuLateral />
      <div className='col'>
        <h2>Cadastrar Compras</h2>

        {message &&
          <MessageAlert {...message} />
        }

        <form onSubmit={handleSubmit(onSubmit)} data-testid='form'>
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
              data-testid='date'
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
                <RadioGroup className={classes.group} data-testid='state'>
                  <FormControlLabel value='Em validação' control={<Radio />} label='Em validação' />
                  <FormControlLabel value='Reprovado' control={<Radio />} label='Reprovado' />
                  <FormControlLabel value='Aprovado' control={<Radio />} label='Aprovado' />
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
