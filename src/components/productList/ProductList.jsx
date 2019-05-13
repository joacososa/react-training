import React from 'react';
import Product from './Product/Product';

class ProductList extends React.Component {
  constructor(){
      super();
      this.state = {
          products: [
            {
                id: 1,
                name: 'Vino',
                description: 'Alamos Malbec'
            },
            {
                id: 2,
                name: 'Cerveza',
                description: 'Ipa Atomica'
            },
            {
                id:3,
                name: 'Fernet',
                description: 'Branca Clasico'
             }
         ]
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
