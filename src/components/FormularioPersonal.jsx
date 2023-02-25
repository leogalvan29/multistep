import React, { useContext, useState } from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { v4 as uuidv4 } from 'uuid';
import {css} from '@emotion/react' 
import styled from '@emotion/styled'
import { Form, useNavigate } from 'react-router-dom' 
import Error from './Error';
import { Context } from 'react';
import { datosOrdenContext } from '../Context/DataContext';



const FormularioPersonal = () => { 

    const {error, setError, usuario, setUsuario} = useContext(datosOrdenContext)

    const [nombre, setNombre] = useState('')
    const [email,setEmail] = useState('')
    const [telefono,setTelefono] = useState('')
   

    //navigate con datos

    const navigate = useNavigate()
    const handleSubmit = () => {
        

        if([nombre,email,telefono].includes('')) {
            console.log('todos los campos son obligatorios')
            setError(true)
            return
        }
        console.log('enviando datos')
        const objetoRegistro = {
            nombre,
            email,
            telefono,
            id:uuidv4()
        }
        console.log(objetoRegistro)
        setError(false)
        navigate(`/step2/${objetoRegistro.id}`, objetoRegistro)
    }
     
  return (
    <div css={css`
        width: 450px;
    `}>
        <div className="texto1" css={css`
            max-width: 450px;
            width: 450px;
        `}>
            <h1 css={css`
                color: #022959;
            `}>Personal Info</h1> 
            <p css={css`
                color: #9699AA;
            `}>Please provide your name, email address, and phone number.</p>
        </div>
        {error && (<p css={css`
            background-color: red;
            font-size:22px;
            font-weight:700;
            color: #fff;
        `}>Todos los campos son obligatorios</p>)}
     <form 
     css={css`
        width: 100%;
        margin: 0px auto;
        height: 270px;
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        position: relative;
        top: 10px;
        .item-form{
            
            display: flex;
            flex-direction:column;
            max-width: 450px;
            width: 100%;
            margin: 0px auto;
            height: 70px; 
            label{
                width: 100%;
                height: 16px;
                position: relative;
                bottom: 5px;
                color: #022959;
                font-weight:400;
                font-size:14px;
            }
            input{
                width: 100%;
                height: 48px;
                color: #022959;
                font-weight:400;
                border-radius:5px;
                border: 1px solid #D6D9E6;
            }
        }
     `}
    
     >

        <div className="item-form">
            <label htmlFor="">Name</label>
            <input type="text" 
            placeholder='e.g. Sthepen king'
            onChange={(e) => setNombre(e.target.value)}

            />
        </div>
        <div className="item-form">
            <label htmlFor="">Email Adres</label>
            <input type="text" 
            placeholder='e.g. Sthepenking@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="item-form">
            <label htmlFor="">Phone Number </label>
            <input type="text" 
            placeholder='e.g. 6674157897'
            onChange={(e) => setTelefono(e.target.value)}
            />
        </div>
          
     </form>
     <button onClick={() => handleSubmit()} 
     css={css`
        width: 123px;
        height: 48px;
        background-color: #483EFF;
        position: relative;
        top: 40px;
        color: #fff;
        font-weight:700; 
        font-size:16px;
        right: 0px;
        border-radius:5px;
        border-color:#483EFF;
     `}
     >Siguiente</button>
    </div>
  )
}

export default FormularioPersonal