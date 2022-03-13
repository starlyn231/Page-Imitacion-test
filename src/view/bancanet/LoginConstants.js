import * as yup from "yup";



export const FormSchema = yup.object({
  user: yup.string().required('Este campo es requerido'),
  // email: yup.string().email('Ingrese un email valido').required('Este campo es requerido'),
  //password: yup.string().required('Este campo es requerido'),

}).required();