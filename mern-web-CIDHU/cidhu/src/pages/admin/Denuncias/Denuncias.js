import React, {useState} from "react";
import {Tab, Button} from "semantic-ui-react";
import {BasicModal} from "../../../components/Shared";
import {DenunciaForm, ListUsers} from "../../../components/Admin/Denuncias"
import "./Denuncias.scss";


export function Denuncias() {

  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  const panes=[
    {
      menuItem: "Denuncias activas",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Denuncias activas</h2>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Denuncias inactivas",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Denuncias inactivos</h2>
        </Tab.Pane>
      ),
    },
  ];


  return (
    <>
      <div className="denuncias-page">
        <Button className="denuncias-page__add" 
        primary
        onClick={(onOpenCloseModal)}  
        >
            Nueva denuncia
        </Button>
        <Tab menu={{secondary: true}} panes={panes} />    
      </div>

      <BasicModal 
          show={showModal} 
          close={onOpenCloseModal} 
          title={"Crear nueva denuncia"}>
            <DenunciaForm close={onOpenCloseModal} />
        </BasicModal>

    </>
  );
}