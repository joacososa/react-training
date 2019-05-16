### Ejercicio 3

## Agregar Validacion al formulario utilizando Formik con Yup
    Proceso de instalacion de formik y yup
    #`npm install formik yup --save`

    En el Componente del formulario 
    #`import { Formik } from  'formik';`
    #`import * as yup from 'yup';` 

## Background:

   - Fromik es una libreria react que permite validar y manipular formularios de forma muy eficiente
   - Esta se combina de forma excelente con yup libreria que permite crear schemas

## Pasos
    Definir schema por sobre el form
    ```        
        const schema = yup.object({
            name: yup.string().required(),
            });
    ```    

    
    Agregar componente formik como padre del form
    ```        
                <Formik
                    validationSchema={schema}
                    onSubmit={this.onSubmit}
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                    .....
                    .....
    ```    

    Realizar validacion sobre el From.Control 
    ```        
    <Form.Group controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
            name="name"
            onChange={handleChange}
            type="text"
            value={values.name}
            placeholder="Agregar nombre."
            onBlur={handleBlur}
            isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
            {errors.name}
        </Form.Control.Feedback>
    </Form.Group>
    ```  


![ejercicio-cards](https://github.com/joacososa/react-training/blob/2-agregar-productos/images-tutorial/3-validate-form.PNG)

Lograr montar la estructura de la imagen.
