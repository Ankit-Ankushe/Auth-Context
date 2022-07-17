import React from 'react'
import { useContext } from 'react'
import { Route,useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Detail from './Detail'
import Login from './Login'

const Private = ({children}) => {
    const {token} = useContext(AuthContext)
    const navigate = useNavigate()
    if(!token.token){
      navigate("/")
    }
  return  children
  
}

export default Private
