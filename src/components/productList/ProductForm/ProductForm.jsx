import React from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Formik } from  'formik';
import * as yup from 'yup'; 

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  imageUrl: yup.string().required(),
});

class ProductForm extends React.Component {
  constructor(){
      super();
      this.state = {
        show: false,
      }
  }

  handleShow = () => {
    this.setState({
        show: true
    });
  }

  handleClose = () => {
    this.setState({
        show: false});
  }

  onSubmit = (product) => {
      this.props.onProductAdded(product);
      this.setState({show: false});
  }

  render(){
    return (
        <React.Fragment>
            <Button variant="primary" onClick={this.handleShow}>
                Agregar Producto
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="name"
                                onChange={handleChange}
                                type="text"
                                value={values.name}
                                placeholder="Agregar nombre."
                                onBlur={handleBlur}
                                isValid={touched.name && !errors.name}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicDesc">
                            <Form.Label name="description">Descripcion</Form.Label>
                            <Form.Control 
                                onChange={handleChange} 
                                value={values.description}
                                name="description"
                                type="text" 
                                placeholder="Agregar descripcion."
                                onBlur={handleBlur}
                                isValid={touched.description && !errors.description}
                                isInvalid={!!errors.description} 
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.description}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicImageUrl">
                            <Form.Label>Url de Imagen</Form.Label>
                            <Form.Control name="imageUrl"
                                onChange={handleChange}
                                value={values.imageUrl}
                                type="text"
                                placeholder="Agregar url de imagen del producto"
                                onBlur={handleBlur}
                                isValid={touched.imageUrl && !errors.imageUrl}
                                isInvalid={!!errors.imageUrl}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.imageUrl}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Agregar Producto
                            </Button>
                        </Modal.Footer>
                    </Form>
                    )}
                </Formik>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
  }  
}

ProductForm.propTypes = {
    onProductAdded: PropTypes.func.isRequired,
}

export default ProductForm;