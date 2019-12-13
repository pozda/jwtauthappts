import axios from 'axios'
import Config from 'services/Config'
import jwt from 'jsonwebtoken'

class AuthService {
    
    login(credentials: {user: string, password: string}){
        return axios.post(`${Config.apiUrl}/users/authenticate`, credentials)
    }

    finishAuthentication(token: string): void {
        localStorage.setItem('token', token)
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token')
        if(!token) {
            return false
        }
        
        const decodedToken = jwt.decode(token, {complete: true})
        const dateNow = new Date()
        // @ts-ignore
        return decodedToken.payload.exp < dateNow.getTime()
    }

    logout() {
        localStorage.removeItem('token')
    }

}

export default new AuthService()