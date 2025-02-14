import React from 'react';
import { HeroCard } from '../components';
import { useForm } from '../../hooks/useForm';
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener el valor de 'q' desde la URL sin usar query-string
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get("q") || "";

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    // Crear y actualizar parámetros en la URL
    const params = new URLSearchParams();
    params.set("q", searchText.toLowerCase().trim());

    navigate(`?${params.toString()}`);
  };

  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              className='form-control'
              placeholder='Find your hero'
              aria-label="Find your hero"
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button type='submit' className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div className='alert alert-primary animate__animated animate__fadeIn' style={{ display: showSearch ? '' : 'none' }}>
            Search Hero
          </div>
          <div className='alert alert-danger animate__animated animate__fadeIn' style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>
          {heroes?.map(hero => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </>
  );
};
