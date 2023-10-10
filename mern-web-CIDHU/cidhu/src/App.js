import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {WebRouter, AdminRouter} from './routers';  
import {AuthProvider} from './contexts';         

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <WebRouter/>
      <AdminRouter/>
      </BrowserRouter>
    </AuthProvider>
  );
}
