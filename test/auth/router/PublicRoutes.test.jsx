import { render,screen } from '@testing-library/react';
import { PublicRouter } from '../../../src/router/PublicRouter';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en PublicRoutes', () => {

    test('debe de mostrar el children si no esta autenticado', () => {
       
        const contextValue = {
            logged:false
        }
        render(
               <AuthContext.Provider value={contextValue}> 
                    <PublicRouter>
                        <h1>Ruta publica</h1> //children: el children puede ser cualquier cosa que queramos mostrar
                    </PublicRouter>
               </AuthContext.Provider>
               );
               expect(screen.getByText('Ruta publica')).toBeTruthy();
    })
    test('debe de navegar si esta autenticado', () => {
       
        const contextValue = {
            logged:true
        }
        render(
               <AuthContext.Provider value={contextValue}> 
                  <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='/login' element={
                            <PublicRouter>
                                <h1>Ruta publica</h1> 
                            </PublicRouter>
                        }/>
                        <Route path='/marvel' element={<h1>Pagina de Marvel</h1>}/>
                    </Routes>
                   
                  </MemoryRouter>
               </AuthContext.Provider>
               );
              
    })
})