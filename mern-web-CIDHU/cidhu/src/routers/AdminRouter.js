import React from 'react'
import {Routes, Route} from "react-router-dom"
import {map} from "lodash"
import {AdminLayout} from "../layouts"
import { Auth } from "../pages/admin/Auth/Auth" 
import {Users}  from "../pages/admin/Users/Users"
import {Blog} from "../pages/admin/Blog/Blog"
import{Denuncias} from "../pages/admin/Denuncias/Denuncias"
import {Menu} from "../pages/admin/Menu/Menu"

const user = { email: "kevin1977@gmail.com"};

export function AdminRouter() {

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
            <Route path="/admin/*" element={loadLayout(AdminLayout, Auth)}/>
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
          </>

        )}      
    </Routes>
  )
}
