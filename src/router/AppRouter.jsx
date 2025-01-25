import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPages } from '../heroes/pages/DcPages';
import { MarvelPages } from '../heroes/pages/MarvelPages';
import { Login } from '../auth/pages/Login';

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
