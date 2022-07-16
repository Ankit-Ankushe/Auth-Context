import React from 'react'
import { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Detail from './Detail'
import Login from './Login'

const Private = ({children,...rest}) => {
    const {token} = useContext(AuthContext)
  return (
    <Route path='/detail' {...rest} element={token.token?<Detail/>:<Login/> }/>
  )
}

export default Private
