import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { productListFetchData } from './productList.actions';
import Product from './Product/Product';
import ProductForm from './ProductForm/ProductForm';
import loader from '../../images/loading.gif';
import './styles.scss';

class ProductList extends React.Component {
  constructor(props){
      super(props);
  }
    
  componentDidMount() {
    this.props.fetchData("http://localhost:3650/products");
  }

  createProductList = () => {
    return this.props.products.map( p => {
        return ( <Col md={3} key={p._id} > <Product product={p} /> </Col> )
    })
  }

  onProductAdded = () => {
    this.props.fetchData("http://localhost:3650/products");
  }

  render(){
    const products = this.createProductList();
    return (
        <React.Fragment>
            <Row>
                <ProductForm onProductAdded={this.onProductAdded} />
            </Row>
            {
                !this.props.isLoading ? 
                <Row>
                    {products}
                </Row>
                :
                <img className="loader" src={loader} />
            }
         
        </React.Fragment>
    );
  }  
}

ProductList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = ({productList}) => {
    return {
        products: productList.data,
        hasErrored: productList.error,
        isLoading: productList.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(productListFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);