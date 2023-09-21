import { SUCCESS_LOGIN } from "../type/user"

export const successLogin = () => {
    return {
        type: SUCCESS_LOGIN,
    }
}

export const handleLogin = (input) => {
    return (dispatch, getState) => {
        if(input.email !== "kresna@gmail.com" || input.password !== "12345") {
            return console.log('invalid email/password')
        }
        dispatch(successLogin())
    }
}