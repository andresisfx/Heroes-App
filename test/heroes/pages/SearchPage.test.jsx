import { MemoryRouter } from "react-router-dom";
import { render ,screen} from "@testing-library/react";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

describe('Pruebas en SearchPage', () => {


    test('debe de mostrar el componente', () => {
        
        
     const {container}=   render(
              <MemoryRouter>
                    <SearchPage/>
              </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
        
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
})