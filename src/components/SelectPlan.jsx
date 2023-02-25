import React, { useContext, useState } from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { datosOrdenContext } from '../Context/DataContext'
import { useNavigate } from 'react-router'
const border = '1px solid #483EFF'

const Caja = styled.div`

    width: 100px;
    height: 100px;
    border: 1px solid black;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border: ${border} ;
    margin: 10px;
    p{
      padding: 10px;
    }
`

const SelectPlan = ({id}) => {
  const navigate = useNavigate()
  const {orden,setOrden} = useContext(datosOrdenContext)
 console.log(id)
  const plans = {
      arcadePlan:{
         name:'arcade',
         price:9,
         
      },
      advandedPlan:{
        name:'Advanced',
        price:12,
        
      },
      proPlan:{
        name:'Pro',
        price:15,
        
      }
  }



 const [plan,setPlan] = useState([])

    const getInfoArcade = (e) => {
        // const plan = document.querySelector('.plan')
        // const precioPlan = document.querySelector('.price')
        // // console.log(plan.textContent)
        // // console.log(parseInt(precioPlan.textContent))
        //  setPrecioArcade(parseInt(precioPlan.textContent))
        //  setArcade(plan.textContent)
       
       
      

        // if(e.target.textContent.includes('')){
        //     console.log('si contiene un numero')
        //     parseInt(document.querySelector('.price'))

        // }

        console.log(e.target.textContent)
      
        
       if(e.target.textContent.includes('arcade') || e.target.textContent.includes('9')){
            setPlan([{
               name:'Arcade',
               price:9,
               id:id
            }])
       }

       console.log(plan)
       setOrden([plan])
    }

    const getInfoAdvanced = (e) => {
       console.log(e.target.textContent)
       if(e.target.textContent.includes('advanced') || e.target.textContent.includes('12')){
        setPlan([{
           name:'Advanced',
           price:12,
           id:id
        }])
        setOrden([plan])
   }
   console.log(plan)
    }
    const getInfoPro = (e) => {

      console.log(e.target.textContent)

      if(e.target.textContent.includes('pro') || e.target.textContent.includes('15')){
        setPlan([{
           name:'Pro',
           price:15,
           id:id
        }])
        setOrden([plan])
   }

   console.log(plan)

    }

   
    //console.log(orden)

  return (
    <div css={css`
      display: flex;
    `}>
     
       <Caja onClick={(e) => getInfoArcade(e)} className='caja'>
         <img src="" alt="" />
         <p>{plans.arcadePlan.name}</p>
         <p>{plans.arcadePlan.price}</p>
       </Caja>
       <Caja onClick={(e) => getInfoAdvanced(e)}>
         <img src="" alt="" />
         <p>{plans.advandedPlan.name}</p>
         <p>{plans.advandedPlan.price}</p>
       </Caja>
       <Caja onClick={(e) => getInfoPro(e)}>
         <img src="" alt="" />
         <p>{plans.proPlan.name}</p>
         <p>{plans.proPlan.price}</p>
       </Caja>
       
    </div>
  )
}

export default SelectPlan