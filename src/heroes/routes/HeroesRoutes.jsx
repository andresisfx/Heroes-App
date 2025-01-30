import React from 'react'
import { NavBar } from '../../UI'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPages,MarvelPages,SearchPage,HeroPage  } from '../../heroes'
import { LoginPage } from '../../auth'

export const HeroesRoutes = () => {
  return (
    <>
       <NavBar />
       <div className="container">
        <Routes>
               <Route path="/dc" element={<DcPages />} />
               <Route path="/marvel" element={<MarvelPages />} />
               <Route path="/search" element={<SearchPage />} />
               <Route path="/hero/:id" element={<HeroPage />} />
               <Route path="/" element={<Navigate to="/marvel"/>} />
               <Route path="/*" element={<LoginPage />} />
       
        </Routes>
        </div>
    </>
  )
}
