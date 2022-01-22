import { authSlice } from "."
import { LoginData, loginService } from "../../services/login"
import store from "../store"

export const login = async (data: LoginData, callback: () => void) =>  {
    const request = await loginService(data)
    localStorage.setItem('token', request.data.token)
    store.dispatch(authSlice.actions.setToken(request.data.token))
    if(callback){
        callback()
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    store.dispatch(authSlice.actions.setToken(null))
}