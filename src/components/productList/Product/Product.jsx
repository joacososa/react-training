import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import './styles.scss';

class ProductList extends React.Component {
    constructor(props){
        super(props);
    }

   render(){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="card-header-img" src={this.props.product.imageUrl} />
            <Card.Body className="card-body">
                <Card.Title> {this.props.product.name}</Card.Title>
                <Card.Text> {this.props.product.description} </Card.Text>
            <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
  }  
}

ProductList.propTypes = {
    product : PropTypes.object,
}

export default ProductList;
