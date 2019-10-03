import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let titleCategory="Kategori Listesi";
  let titleProduct="Ürün Listesi";
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="4">
            <CategoryList title={titleCategory}/>
          </Col>
          <Col xs="8">
            <ProductList title={titleProduct}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
