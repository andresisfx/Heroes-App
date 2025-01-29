import React from 'react'
import { AppRouter } from './router/AppRouter'
import { NavBar } from './UI'
import { AuthProvider } from './auth'

export const HeroesApp = () => {
  return (
    <AuthProvider>
    
     <AppRouter />
    </AuthProvider>
  )
}
