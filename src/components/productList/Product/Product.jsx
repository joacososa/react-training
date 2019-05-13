import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class ProductList extends React.Component {
    constructor(props){
        super(props);
    }

   render(){
    return (
        <div className="product-container">
            <p>{this.props.product.name}</p>
            <p>{this.props.product.description}</p>
        </div>
    );
  }  
}

ProductList.propTypes = {
    product : PropTypes.object,
}

export default ProductList;
