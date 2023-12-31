import React from 'react'
import {Routes, Route} from "react-router-dom"
import {AdminLayout} from "../layouts"
import {Auth, Users, Blog, Denuncias, Menu, Abogados} from "../pages/admin"
import {useAuth} from "../hooks"



export function AdminRouter() {
  const {user} = useAuth();

  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page/>
      </Layout>
    )
  } ;
  
  return (
    <Routes>
        {!user ? (
            <Route path="/admin/*" element={<Auth/>}/>
        ):(
          <>
          {["/admin", "/admin/blog"].map((path) => (
            <Route 
            key={path} 
            path={path} 
            element={loadLayout(AdminLayout, Blog)}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)}/>
          <Route path="/admin/denuncias" element={loadLayout(AdminLayout, Denuncias)}/>
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)}/>
          <Route path="/admin/abogados" element={loadLayout(AdminLayout, Abogados)}/>
          </>

        )}      
    </Routes>
  )
}
