import { authReducer } from '../../../src/auth/context/authreducer';
import { types } from '../../../src/auth/types/types';

describe( 'Pruebas en authReducer', () => {
     
    test('debe de retornar el estado por defecto', () => {
        
        const state = authReducer({logged:false},{});
        expect(state).toEqual({logged:false});

    })
    test('debe de autenticar el usuario', () => {
        
        const action = {
            type:types.login,
            payload:{
                id:'123',
                name:'Andres'
            }
            }
        const state = authReducer({logged:false},action);
        expect(state).toEqual({logged:true,user:action.payload});

    })

    test('debe de borrar el name del usuario', () => {
        

        const state={
            logged:true,
            user:{id:'123',name:'Andres'}
        }
        const action = {
            type:types.logout
        }

        
        const newState=authReducer(state,action);
        console.log(newState)
        expect(newState).toEqual( {logged:false} );
    })
})