import React from 'react'
import Auth from './Auth'
import { Link } from 'react-router-dom'
import { Link as MUILink } from '@mui/material'

const Login = () => {
  return (
    <>
       <Auth submitLabel="login" onSubmit={async () => {}}/>
       <Link to={'signup'} style={{alignSelf: "center"}}>
        <MUIlink>SignUp</MUIlink>
    </Link>
    </>
  )
}

export default Login