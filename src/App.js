import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//Baska component kullanılacağı zaman import edilir.
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';


function App() {
  //reactstrapten container ve row yapıları alındı.
  let productInfo= {title:"ProductList"};
  let categoryInfo = {title:"CategoryList"};
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3"><CategoryList info={categoryInfo}/> </Col>
          <Col xs="9"><ProductList info={productInfo} /></Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
