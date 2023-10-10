import React from 'react'
import {Form} from "semantic-ui-react"
import {useFormik} from "formik"
import {initialValues, validationSchema} from "./LoginForm.form"
import {Auth} from "../../../../api"

//Login del formulario FRONTEND
const authController = new Auth();

export function LoginForm() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const response = await authController.login(formValue);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    });
  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Input
            name="email"
            placeholder="Ingresa tu correo electronico"
            label="Correo electronico"
            type='email'
            onChange={formik.handleChange}
            value = {formik.values.email}
            error={formik.errors.email}
        />
        <Form.Input
            name="password"
            placeholder="Ingresa tu contraseña"
            type="password"
            label="Contraseña"
            onChange={formik.handleChange}
            value = {formik.values.password}
            error={formik.errors.password}
        />
        <Form.Button
            type='submit'
            primary fluid>
        Entrar    
        </Form.Button>
    </Form>
  )
}
