import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoriId: 1, categoryName: "Bavengers" },
        { categoriId: 2, categoryName: "Condimetals" }
      ]
    };
  }*/ //olmasada oluyor props=compotentler arası data taşıma //state:kendi componentin datası
  state = {
    categories: [
      { categoriId: 1, categoryName: "Bavengers" },
      { categoriId: 2, categoryName: "Condimetals" }
    ],
    currentCategory: ""
  };
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
  };
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              onClick={() => this.changeCategory(category)}
              key={category.categoriId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
