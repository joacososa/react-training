import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './Product/Product';

class ProductList extends React.Component {
  constructor(){
      super();
      this.state = {
          products: [
              {
                  ide: 1,
                  name: 'Vino',
                  description: 'Alamos Malbec',
                  imageUrl: 'https://http2.mlstatic.com/vino-alamos-malbec-the-wines-of-catena-D_NQ_NP_781653-MLA27334651688_052018-F.jpg'
              },
              {
                  id: 2,
                  name: 'Cerveza',
                  description: 'Ipa Atomica',
                  imageUrl: 'https://mlstaticquic-a.akamaihd.net/cerveza-artesanal-cabesas-bier-ipa-atomica-D_NQ_NP_648883-MLU27033678870_032018-F.jpg'
              },
              {
                  id:3,
                  name: 'Fernet',
                  description: 'Branca Clasico',
                  imageUrl: 'https://www.encopadebalon.com/3861-large_default/fernet-branca.jpg'
              }
           ]
      }
  }
    
  createProductList = () => {
    return this.state.products.map( p => {
        return ( <Col md={3} key={p.id} > <Product product={p} /> </Col> )
    })
  }

  render(){
    const products = this.createProductList();
    return (
        <Row>
            {products}
        </Row>
    );
  }  
}

export default ProductList;
