import React, {useState} from 'react'
import { Tab, Image } from "semantic-ui-react"
import { RegisterForm, LoginForm } from "../../../components/Admin/Auth"
import "./Auth.scss"
import {image, Icon} from "../../../assets"

export function Auth() {
  const [activeIndex, setActiveIndex] = useState(0);
  const openLogin = () => setActiveIndex(0);

  const panes = [
     {
      menuItem: "Iniciar Sesión",
      render: () => (
        <Tab.Pane>
          <LoginForm/>
        </Tab.Pane>
        ),
      },
      {
        menuItem: "Registrarse",
        render: () => (
          <Tab.Pane>
            <RegisterForm openLogin={openLogin}/>
          </Tab.Pane>
        ),
      },
  ];
  return (
    <div className='auth'>
        <Image src={image.logoPerfecto} className='logo'/>
          {/* <Icon.LogoWhite className='logo'/> */}
        <Tab className='auth__forms' panes={panes} activeIndex={activeIndex} onTabChange={(_, data) =>setActiveIndex(data.activeIndex)}/>
    </div>
  )
}
