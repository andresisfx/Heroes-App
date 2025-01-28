import React from 'react'
import { HeroCard } from '../components'

export const SearchPage = () => {
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
                />
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1'

                >Search</button>
                </form>

            </div>
            <div className='col-7'>
                <h4>Results</h4>
                <hr />
                <div className='alert alert-primary animate__animated animate__fadeIn'>
                    Search Hero
                </div>
                <div className='alert alert-danger animate__animated animate__fadeIn'>
                    Not found
                </div>
                <HeroCard />


            </div>
      </div>
    </>
  )
}
