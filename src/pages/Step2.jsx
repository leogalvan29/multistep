import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import SelectPlan from '../components/SelectPlan'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'


const Step2 = () => { 
  
  const navigate = useNavigate()
   const {id} = useParams()
   console.log(id)
   const regresar = () => {
    navigate('/', {state:{id}})
 }
  
  return (
    <div css={css`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 100px 0px;
    `}>
       
  <SelectPlan 
   id={id}
  />
   
   <button onClick={()=>regresar()}>Regresar</button>
        
    </div>
  )
}

export default Step2