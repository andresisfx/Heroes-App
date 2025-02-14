import { render,screen } from '@testing-library/react';
 import { AppRouter } from '../../../src/router/AppRouter'; //problemas con la librería query string
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter, Route } from 'react-router-dom';


describe('Pruebas en AppRouter', () => {
    test('debe de mostrar el login si no esta autenticado', () => {
       
        const contextValue = {
            logged:false
        }
        render(
              <MemoryRouter initialEntries={['/marvel']}>
                    <AuthContext.Provider value={contextValue}> 
                            <AppRouter>
                                <h1>Login</h1> 
                            </AppRouter>
                    </AuthContext.Provider>
               </MemoryRouter>
               );
               expect(screen.getAllByText('Login').length).toBe(2);
    })
    test('debe de mostrar el children si esta autenticado', () => {
       
        const contextValue = {
            logged:true,
            user:{
                id:'123',
                name:'Andres'
            }
        }
        render(
              < MemoryRouter initialEntries={['/marvel']}>
                    <AuthContext.Provider value={contextValue}> 
                            <AppRouter/>
                                
                           
                    </AuthContext.Provider>
               </MemoryRouter>
               );
               expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)

    })
})        