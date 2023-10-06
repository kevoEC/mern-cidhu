import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Auth} from "../pages/admin/Auth"

export function AdminRouter() {
  return (
    <Routes>
        <Route path="/" element={<Auth/>}/>
    </Routes>
  )
}
