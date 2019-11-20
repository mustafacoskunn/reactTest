import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };
  componentDidMount() {
    this.getProducts();
  }
  addToCart = (products) => {
    let newCart=this.state.cart;

    newCart.push({product:products,quatity:1});
    this.setState({cart:newCart});
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
          <Navi 
          cart={this.state.cart}
          />

          <Row>
            <Col xs="4">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="8">
              <ProductList
                productsList={this.state.products}
                info={productInfo}
                currentCategory={this.state.currentCategory}
                addToCart={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
