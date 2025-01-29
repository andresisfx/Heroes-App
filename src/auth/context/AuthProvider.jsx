import React from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authreducer';

 const initialState = {
    logged:false
 }

export const AuthProvider = ({children}) => {

    const [state,dispatch] = React.useReducer(authReducer,initialState);

  return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
  )
}
