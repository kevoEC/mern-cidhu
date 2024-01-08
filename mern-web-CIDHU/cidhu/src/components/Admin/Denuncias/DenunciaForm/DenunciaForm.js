import React from "react";
import {Denuncia} from "../../../../api"
import {useAuth} from "../../../../hooks"
import {initialValues, validationSchema} from "./DenunciaForm.form"

import {useFormik} from "formik"
import {Form, Button, Checkbox} from "semantic-ui-react";

const denunciaController = new Denuncia();

export function DenunciaForm(props) {

    const {close, onReload, denuncia} = props;
    const { accessToken} = useAuth();

    const formik = useFormik({
        initialValues: initialValues(denuncia),
        validationSchema: validationSchema(denuncia),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if (!denuncia) {
                    await denunciaController.createDenuncia(accessToken, formValue);
                    
                } else{
                    await denunciaController.updateDenuncia(accessToken, denuncia._id, formValue);
                }                
                onReload();
                close();
            } catch (error) {
                console.log(error);
            }
        }
    });



    return (
        <Form className="denuncia_form" onSubmit={formik.handleSubmit}>
            
            <Form.Group widths="equal">

            <Form.Dropdown 
            placeholder='Selecciona el caracter' selection options={caracterOptions}
            onChange={(_, data)=> formik.setFieldValue("caracter", data.value)}
            value={formik.values.caracter}
            error={formik.errors.caracter}
            />

            <Form.Dropdown 
            placeholder='Selecciona la instancia' selection options={instanciaOptions}
            onChange={(_, data)=> formik.setFieldValue("instancia", data.value)}
            value={formik.values.instancia}
            error={formik.errors.instancia}
            />
            </Form.Group>

            <Form.Group widths="equal">

                <Form.Checkbox label="Caracter Personal"
                        onChange={(_, data)=> formik.setFieldValue("caracterPersonal", data.value)}
                        value={formik.values.caracterPersonal}
                        error={formik.errors.caracterPersonal}>
                </Form.Checkbox>
            
                <Form.Checkbox label="Asistencia personal"
                        onChange={(_, data)=> formik.setFieldValue("asistencia", data.value)}
                        value={formik.values.asistencia}
                        error={formik.errors.asistencia}></Form.Checkbox>
                </Form.Group>

            
            <Form.Group widths="equal">
                <Form.Input 
                name="nombresResponsables" 
                placeholder="Nombre de los responsables"
                onChange={formik.handleChange} 
                value={formik.values.nombresResponsables}
                error={formik.errors.nombresResponsables} 
                />

                <Form.Input 
                name="resumenHechos" 
                placeholder="Describa los hechos ocurridos"
                onChange={formik.handleChange} 
                value={formik.values.resumenHechos}
                error={formik.errors.resumenHechos} 
                />
            </Form.Group>

            <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
            {denuncia ? "Actualizar denuncia" : "Crear denuncia"}
            </Form.Button>

        </Form>
    );
    }

    const caracterOptions = [
        {
            key: "personal",
            text: "Personal",
            value: "personal",
        },
        {
            key: "familiar",
            text: "Familiar",
            value: "familiar",
        },
        {
            key: "organizacion",
            text: "Organización",
            value: "organizacion",
        },
        {
            key: "asociacion",
            text: "Asociación",
            value: "asociacion",
        },
        {
            key: "institucion",
            text: "Institución",
            value: "institucion",
        },
        {
            key: "grupo",
            text: "Grupo",
            value: "grupo",
        },
        {
            key: "empresa",
            text: "Empresa",
            value: "empresa",
        },
        {
            key: "estado",
            text: "Estado",
            value: "estado",
        },
        {
            key: "gobierno",
            text: "Gobierno Autónomo",
            value: "gobierno",
        },
    ]   
    
    const instanciaOptions = [
        {
            key: "territorial",
            text: "Territorial",
            value: "territorial",
        },
        {
            key: "nacional",
            text: "Nacional",
            value: "nacional",
        },
        {
            key: "internacional",
            text: "Internacional",
            value: "internacional",
        },
    ]   