import React from 'react'
import { Outlet } from 'react-router'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom'
import {css} from '@emotion/react' 
import styled from '@emotion/styled'
import { useParams } from 'react-router'

const MenuItem = styled.div`
       width: 90%;
       display: flex;
       flex-direction:row;
       justify-content: center; 

       
      
       .number{
          width: 20px;
          height: 20px;
          padding: 10px;
          border:1px solid white;
          border-radius:50%;
          display: flex;
          justify-content: center;
          position: relative;
          right: 20px;
       }
      
       .number p {
        color: white;
        font-weight:700;
       }

       .texto{
        display: flex;
        flex-direction:column;
        justify-content: center;
       }
       .texto p{
          width: 86px;
          height: 40px;
       }
       .texto :nth-of-type(1){
            color: white;
            font-weight:400;
            font-size:12px;
            height: 14px;
       }
       .texto :nth-of-type(2){
        color: white;
        font-weight:700;
        margin-top:5px;
       }
       @media(max-width:768px){
        .texto{
            display: none;
            
        }
       }
`

const Layout = () => { 

    const {id} = useParams()
  return (
    <>
    <div className="contenedor-principal" css={css`
        
          height: 100vh; 
          display: flex;
          flex-direction:column;
           @media(min-width: 768px){
            flex-direction:row;
           }
          
    `}>
        <div className="navegacion" css={css`
              background-color: #483EFF;
              width: 30%;
              padding: 100px 0px;
              height: 100vh;
              @media(max-width: 768px){
                 width: 100%;
                 display: flex;
                 
                 
              }
        `}>
          <MenuItem>
              <Link className="number" to={'/'}>
                 <p>1</p>
              </Link>
              <div className="texto">
                <p>Step 1</p>
                <p>Your Info</p>
              </div>
          </MenuItem>
          <MenuItem>
              <Link className="number" to={`/step2/${id}`}>
                 <p>2</p>
              </Link>
              <div className="texto">
                <p>Step 2</p>
                <p>Select Plan</p>
              </div>
          </MenuItem>
          <MenuItem>
              <div className="number">
                 <p>3</p>
              </div>
              <div className="texto">
                <p>Step 3</p>
                <p>ADDONS</p>
              </div>
          </MenuItem>
          <MenuItem>
              <div className="number">
                 <p>4</p>
              </div>
              <div className="texto">
                <p>Step 4</p>
                <p>SUMMARY</p>
              </div>
          </MenuItem>
          
        </div>
        <Outlet/>
    </div>
    
    </>
  )
}

export default Layout