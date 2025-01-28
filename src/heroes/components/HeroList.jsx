import React from 'react'
import { getHeroesByPublisher } from '../helpers'

import { HerCard } from './'

export const HeroList = ({publisher}) => {

    const heroes= getHeroesByPublisher(publisher);


  return (
    
    <>
       <ul className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {heroes.map((hero)=>(
              <HerCard 
                  key={hero.id}
                     {...hero}
                     
              />))}        
       </ul>
    
    </>
  )
}
