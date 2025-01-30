import React from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authreducer';
import { types } from '../types/types';

//  const initialState = {
//     logged:false
//  }
 const init = () => {   
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged:!!user,
        user:user
    }
}

export const AuthProvider = ({children}) => {

    const [authState,dispatch] = React.useReducer(authReducer,{},init);
    const login = (name='') => {
        const user = {id:'123',name};
       const action = {
            type:types.login,
            payload:user
        }
        dispatch(action);
        localStorage.setItem('user',JSON.stringify(user));
    }
    const logOut = () => {
        localStorage.removeItem('user');
        const action = {
            type:types.logout
        }
        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login:login,
        logOut:logOut
    }}>
        {children}
    </AuthContext.Provider>
  )
}
