import * as Yup from 'yup';


export function initialValues(denuncia) {
  return {
    caracter: denuncia?.caracter || '',
    instancia: denuncia?.instancia || '',
    resumenHechos: denuncia?.resumenHechos || '',
    nombresResponsables: denuncia?.nombresResponsables || '',
  };
}

export function validationSchema() {
    return Yup.object({
        caracter: Yup.string().required(true),
        instancia: Yup.string().required(true),
        resumenHechos: Yup.string().required(true),
        nombresResponsables: Yup.string().required(true),

    });
}