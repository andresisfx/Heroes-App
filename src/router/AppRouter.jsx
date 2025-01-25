import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPages,MarvelPages } from '../heroes';
import { Login } from '../auth';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/dc" element={<DcPages />} />
        <Route path="/marvel" element={<MarvelPages />} />
        <Route path="/login" element={<Login/>} />

        <Route path="/" element={<Navigate to="/marvel"/>} />
        <Route path="/*" element={<Login />} />

      </Routes>
    </>
  )
}
