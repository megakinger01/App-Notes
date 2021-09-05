import { AuthState } from "../interfaces/interfaces"
import { login } from '../Redux-actions/authActions';



const authState:AuthState = {
    uid:'',
    name:''
}


type AuthAction = ReturnType<typeof login  >;

export const authReducer = ( state:AuthState = authState  , action:AuthAction ):AuthState => {

    switch (action.type) {
        case 'login':
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        default:
            return state 
    }
}
