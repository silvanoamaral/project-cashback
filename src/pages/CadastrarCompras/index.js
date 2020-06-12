import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import { maskPreco } from '../../utils/mask'

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
    }
  },
}))

const CadastrarCompras = () => {
  const { register, handleSubmit, setValue, control, errors } = useForm()
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  const onChangeInput = event => {
    setValue([{
      'valor': maskPreco(event.target.value)
    }])
  }

  const onSubmit = async data => {
    console.log(data)
  }

  return(
    <div className='content'>
      <MenuLateral />
      <div className='col'>
        <h2>Cadastrar Compras</h2>
        
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
                  type="date"
                  className={classes.root}
                  variant="outlined"
                />
              }
              name="date"
              control={control}
              defaultValue=""
              rules={{ required: true }}
            />
            {errors.date &&
              <p className='error'>Data é obrigatório</p>
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