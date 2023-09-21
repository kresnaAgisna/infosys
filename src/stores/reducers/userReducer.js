import { SUCCESS_LOGIN } from "../actions/type/user"

const initialState = {
    user: {
        id: null,
        email: "",
        name: ""
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUCCESS_LOGIN: 
            return {
                ...state,
                user: {
                    id: 1,
                    email: "kresna@gmail.com",
                    name: "Kresnaza"
                }
            }
        default: 
           return state
    }
}  

export default userReducer