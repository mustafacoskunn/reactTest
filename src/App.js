import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let productInfo = {
    title: "Ürün Listesi"
  };

  let categoryInfo = {
    title: "Kategori Listesi"
  };
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="4">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="8">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
