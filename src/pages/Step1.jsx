import React from 'react' 
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import {css} from '@emotion/react' 
import styled from '@emotion/styled'
import FormularioPersonal from '../components/FormularioPersonal'
import { useContext } from 'react'
import { datosOrdenContext } from '../Context/DataContext'
import { useLocation, useNavigate, useParams } from 'react-router'



const Step1 = () => { 
   
    const {saludo} = useContext(datosOrdenContext) 
    console.log(saludo)
   
    const location = useLocation()
    console.log(location)
  return (
    <div css={css`
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top:50px;
        @media(max-width:768px){
           width: 90%;
           margin: 0px auto;
        }
    `}>
        <FormularioPersonal/>
    </div>
  )
}

export default Step1