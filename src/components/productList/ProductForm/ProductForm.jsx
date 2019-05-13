import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ProductForm extends React.Component {
  constructor(){
      super();
      this.state = {
        show: false,
        product : {
            name: '',
            description: '',
            imageUrl: '',
        }
      }
  }

  handleShow = () => {
    this.setState({
        show: true
    });
  }

  handleClose = () => {
    this.setState({
        show: false,
        product : {
            name: '',
            description: '',
            imageUrl: '',
    }});
  }

  onTextElementChanged = (event) => {
      this.setState({product: {
        ...this.state.product,  
        [event.target.name] : event.target.value,
      }
    })
  }

  onSubmit = () => {
      this.props.onProductAdded(this.state.product);
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
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="name" onChange={this.onTextElementChanged} type="text" placeholder="Agregar nombre." />
                    </Form.Group>
                    <Form.Group controlId="formBasicDesc">
                        <Form.Label name="description">Descripcion</Form.Label>
                        <Form.Control onChange={this.onTextElementChanged} type="text" placeholder="Agregar descripcion." />
                    </Form.Group>
                    <Form.Group controlId="formBasicImageUrl">
                        <Form.Label>Url de Imagen</Form.Label>
                        <Form.Control name="imageUrl" onChange={this.onTextElementChanged} type="text" placeholder="Agregar url de imagen del producto" />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={this.onSubmit}>
                    Agregar Producto
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
  }  
}

ProductForm.propTypes = {
    onProductAdded: PropTypes.func.isRequired,
}

export default ProductForm;