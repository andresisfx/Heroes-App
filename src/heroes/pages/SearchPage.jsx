import React, { useMemo } from 'react'
import queryString from 'query-string'
import { HeroCard } from '../components'
import { useForm } from '../../hooks/useForm'
import { useNavigate,useLocation } from 'react-router-dom'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {
    
   const naviagte= useNavigate();
   const location=useLocation();

   const {q=''}=queryString.parse(location.search);

    const {searchText, onInputChange, onResetForm}=useForm(
        {
            searchText:''
        }
    );

    const onSearchSubmit=(event)=>{
        event.preventDefault();
        if(searchText.trim().length<=1) return;
        naviagte(`?q=${searchText.toLowerCase().trim()}`);
    }

    const heroes=getHeroesByName(q);

    const showSearch=(q.length===0);
    const showError=(q.length>0 && heroes.length===0);
    console.log("error",showError);
    console.log("search",showSearch);

  return (
    <>
      <h1>Seacrh</h1>
      <hr />
      <div className='row'>
            <div className='col-5'>

                <form action="">
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
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1'
                    onClick={onSearchSubmit}

                >Search</button>
                </form>

            </div>
            <div className='col-7'>
                <h4>Results</h4>
                <hr />
                <div className='alert alert-primary animate__animated animate__fadeIn' style={{display: showSearch ? '' : 'none'}}>
                    Search Hero
                </div>

                <div className='alert alert-danger animate__animated animate__fadeIn'style={{display: showError ? '' : 'none' }}>
                    No hero with <b>{q}</b>
                </div>
                

                {
                  heroes?.map(hero=>(
                  <HeroCard {...hero} key={hero.id}
                  />))
                }
                
            </div>
      </div>
    </>
  )
}
