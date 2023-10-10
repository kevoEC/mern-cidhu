import * as Yup from "yup"; //Importamos Yup para validar el formulario

//Valores iniciales del formulario
export function initialValues(){
    return {
        email: "",
        password: "",
        repeatPassword: "",
        conditionsAccepted: false
    }
}
//Validacion del formulario FRONTEND
export function validationSchema(){
    return Yup.object({
        email: Yup.string()
        .email("El email no es valido")
        .required("Campo obligatorio"),

        password: Yup.string().
        required("Campo obligatorio"),

        repeatPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),

        conditionsAccepted: Yup.bool().isTrue(true)
    })
}