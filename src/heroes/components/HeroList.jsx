import React ,{useMemo} from 'react'
import { getHeroesByPublisher } from '../helpers'

import { HeroCard } from './'

export const HeroList = ({publisher}) => {

    const heroes=useMemo(()=>getHeroesByPublisher(publisher),[publisher]);


  return (
    
    <>
       <ul className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {heroes.map((hero)=>(
              <HeroCard 
                  key={hero.id}
                     {...hero}
                     
              />))}        
       </ul>
    
    </>
  )
}
