import React from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authreducer';

 const initialState = {
    logged:false
 }

export const AuthProvider = ({children}) => {

    const [state,dispatch] = React.useReducer(authReducer,initialState);
    const login = (name='') => {
       const action = {
            type:types.login,
            payload:{
                id:"ABC",
                name:'Fernando'

            }
        }
        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login:login
    }}>
        {children}
    </AuthContext.Provider>
  )
}
