import { Formik, Form } from "formik";
import * as Yup from "yup";
//import { ApiFetch } from "../../data/ApiFetch";
import formJson from "../../data/custom-form.json";


import { MySelect, MyTextField } from "./components"
// ES6 Modules or TypeScript
//import Swal from "sweetalert2";
const initialValues = {};
const requiredFields = {};

for (const input of formJson) {
  //captura valor inicial
  initialValues[input.name] = input.value;

  //si no tiene validacion, sale
  if (!input.validations) continue;

  //crea un schema para cada uno de los campos
  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        rule.value || 2,
        `Mínimo de ${rule.value || 2} caracteres`
      );
    }

    if (rule.type === "email") {
      schema = schema.email(`Revise el formato del email`);
    }
  }
  // ... otras reglas

  requiredFields[input.name] = schema;
}
//objeto con todas las validaciones
const validationSchema = Yup.object({ ...requiredFields });

export const DinamicForm = () => {
  //console.log(data);
  /* const alert = () => {
     Swal.fire({
       title: "Empresa Agregada",
       text: "ya puede hacer transaciones",
       // html:
       icon: "error",
       confirmButtonText: "ok",
       footer: "Cualquie info adicional",
       width: 600,
       padding: "1rem",
 
       timer: 7000,
     });
   };
 */
  return (
    <div>
      <h1>AFDF</h1>

      <Formik
        initialValues={{ name: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          alert();
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (["input", "password", "email"].includes(type)) {
                return (
                  <MyTextField
                    key={name}
                    type={type}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value=''>Select Option </option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              return <span>Type: {type} No es soportado </span>;
            })}
            <button type='submit'> Submit</button>
          </Form>
        )}
      </Formik>

    </div>
  );
};
