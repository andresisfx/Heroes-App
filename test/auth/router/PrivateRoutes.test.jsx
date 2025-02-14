import { render,screen } from '@testing-library/react';
import { PrivateRouter } from '../../../src/router/PrivateRouter';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en PrivateRoutes', () => {

    test('debe de mostrar el children si esta autenticado', () => {
       
        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged:true,
            user:{
                id:'123',
                name:'Andres'
            }
        }
        render(
            
               <AuthContext.Provider value={contextValue}> 
                  <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRouter>
                        <h1>Ruta privada</h1> 
                    </PrivateRouter>
                  </MemoryRouter>
               </AuthContext.Provider>
               );
               expect(screen.getByText('Ruta privada')).toBeTruthy();
               expect (localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel')
    })
})        