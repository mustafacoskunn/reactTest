import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {


  state={
    currentCategory: ""

  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
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
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="8">
              <ProductList info={productInfo} currentCategory={this.state.currentCategory} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

