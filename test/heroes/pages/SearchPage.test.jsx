import { MemoryRouter } from "react-router-dom";
import { render ,screen,fireEvent} from "@testing-library/react";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";


const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,
    }));

describe('Pruebas en SearchPage', () => {

      beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el componente', () => {
        
        
     const {container}=   render(
              <MemoryRouter>
                    <SearchPage/>
              </MemoryRouter>
        );
        expect(container).toMatchSnapshot()
        
    })

    test('debe de mostrar a Batman y el input con el valor de q', () => {
        
        render(
              <MemoryRouter initialEntries={['/search?q=batman']}>
                    <SearchPage/>
              </MemoryRouter>
        );
        const inputValue=screen.getByRole('textbox')
        expect( inputValue.value).toBe('batman');

        const img=screen.getByRole('img');
        expect(img.src).toContain('batman');

        const alert=screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('none');
    })

    test('debe de mostrar un error si el heroe no existe', () => {
        
        render(
              <MemoryRouter initialEntries={['/search?q=batman123']}>
                    <SearchPage/>
              </MemoryRouter>
        );
        const alert=screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('');
    })

    test('debe de llamar el navigate', () => {
        
       
        render(
              <MemoryRouter initialEntries={['/search']}>
                    <SearchPage navigate={mockNavigate}/>
              </MemoryRouter>
        );
        const inputValue=screen.getByRole('textbox')
        fireEvent.change(inputValue,{target:{value:'superman'}})
        const form=screen.getByRole('form');
        fireEvent.submit(form);
        expect(mockNavigate).toHaveBeenCalledWith('?q=superman');
        
    })
})