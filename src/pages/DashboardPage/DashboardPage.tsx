import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from 'components/Button/Button'
import {toast} from 'react-toastify'
import AuthService from 'services/auth/AuthService'
import jwt from 'jsonwebtoken'

const DashboardPage = () => {
    const history = useHistory()
    const notify = (type: 'info' | 'error', message: string) => {
        switch (type) {
        case 'info':
            return toast.info(message)
        case 'error':
            return toast.error(message)
        }
    }

    const logout = () => {
        AuthService.logout()
        history.push('/login')
        notify('info', 'Logout successful!')
    }

    const checkUserName = () => {
        const token = localStorage.getItem('token')
        if(!token) {
            return false
        }
        
        const decodedToken = jwt.decode(token, {complete: true})
    
        // @ts-ignore
        return decodedToken.payload.username
        
    }
    
    return(
        <div>
            <h1>Hi, {checkUserName()}</h1>
            <Button secondary text={'Logout'} onClick={logout} />
        </div>
    )}

export default DashboardPage