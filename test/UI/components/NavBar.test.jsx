import { fireEvent, render,screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../../../src/UI/components/NavBar';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))
describe('Pruebas en NavBar', () => {

    const contextValue = {
        user:{
            name:'Andres',
            id:'123'
        },
        loggout:jest.fn()
    }
    beforeEach(() => jest.clearAllMocks());



    test('debe de mostrar el nombre en el componente', () => {
        
        
        render(

               <AuthContext.Provider value={contextValue}> 
                 <MemoryRouter>
                   <NavBar/>
                 </MemoryRouter>
               </AuthContext.Provider>

               );
        expect(screen.getByText('Andres')).toBeTruthy();

    })

    test('debe de llamar el logOut y navegar', () => {
        
        const contextValue = {
            user:{
                name:'Andres',
                id:'123'
            },
            logOut:jest.fn()
        }
        render(
               <AuthContext.Provider value={contextValue}> 
                 <MemoryRouter>
                   <NavBar/>
                 </MemoryRouter>
               </AuthContext.Provider>
               );
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(contextValue.logOut).toHaveBeenCalled();
        expect (mockNavigate).toHaveBeenCalledWith("/login", {"replace": true});
        
  })
})