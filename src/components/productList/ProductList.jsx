import React from 'react';
import Product from './Product/Product';
import data from './products.json';

class ProductList extends React.Component {
  constructor(){
      super();
      this.state = {
          products: data.products
      }
  }
    
  createProductList = () => {
    return this.state.products.map( p => (<Product key={p.id} product={p} />));
  }

  render(){
    const products = this.createProductList();
    return (
            <React.Fragment>
                {products}
            </React.Fragment>
        );
  }  
}

export default ProductList;
