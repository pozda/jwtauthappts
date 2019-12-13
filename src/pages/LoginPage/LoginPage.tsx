import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Button from 'components/Button/Button'
import FormField from 'components/FormField/FormField'
import {StyledLoginPage, StyledLoginPageForm} from './LoginPageStyles'
import AuthService from 'services/auth/AuthService'
import {toast} from 'react-toastify'

const LoginPage = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({user: '', password: ''})

    const login = () => {
        AuthService.login(credentials)
            .then((res: any) => {        
                AuthService.finishAuthentication(res.data.token)
                history.push('/dashboard')
                notify('success', 'Login successful')
            })
            .catch((error: any) => {
                notify('error', error.message)
            })
    }
    

    const setUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({user: e.target.value, password: credentials.password})
    }

    const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({user: credentials.user, password: e.target.value})
    }

    const notify = (type: 'success' | 'error', message: string) => {
        switch (type) {
        case 'success':
            return toast.success(message)
        case 'error':
            return toast.error(message)
        }
    }
    
    return(
        <StyledLoginPage>
            <StyledLoginPageForm>
                <FormField type={'text'} placeholder={'Username'} onChange={setUsername} onKeyDown={()=> {'stg'}} />
                <FormField type={'password'} placeholder={'Password'} onChange={setPassword} onKeyDown={()=> {'stg'}} />
                <Button text={'Login'} onClick={login} />
            </StyledLoginPageForm>
        </StyledLoginPage>
    )}
export default LoginPage