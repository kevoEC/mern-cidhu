import React from "react";
import { image} from "../../assets"
import { Image } from "semantic-ui-react"
import {AdminMenu, Logout} from "../../components/Admin/AdminLayout"
import "./AdminLayout.scss"

export function AdminLayout(props){
    const {children} = props;

    return (
        <div className="admin-layout">
            <div className="admin-layout__left">
                <Image src={image.logoPerfecto} className="logo"/>
                {/* <Icon.LogoWhite className="logo"/> */}
                <AdminMenu/>
            </div>
            <div className="admin-layout__right">
                <div className="admin-layout__right-header">
                    <Logout/>
                </div>

                <div className="admin-layout__right-content">
                    {children}
                </div>
            </div>
        </div>
    );
}