import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {WebRouter, AdminRouter} from './routers';

export default function App() {
  return (
    <BrowserRouter>
    <WebRouter/>
    <AdminRouter/>
    </BrowserRouter>
  );
}
