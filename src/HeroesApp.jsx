import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';
import './styles.css'
import 'animate.css';

export const HeroesApp = () => {
  return (
   <div className='heroPage-container'>
      <AuthProvider>
          <AppRouter />
      </AuthProvider>     
   </div>
  )
}
