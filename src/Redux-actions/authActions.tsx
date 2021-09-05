import { types } from "../Redux-types/types";
import { Login } from '../interfaces/interfaces';


export const login = ( { uid, displayName }:Login  ) => ({
    type: types.LOGIN,
    payload:{
        uid,
        displayName
    }
})