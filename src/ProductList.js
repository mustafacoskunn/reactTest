import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>productName</th>
              <th>unitPrice</th>
              <th>quantityPerUnit</th>
              <th>unitsInStock</th>
              <th></th>


            </tr>
          </thead>
          <tbody>
            {this.props.productsList.map(products => (
              <tr key={products.id}>
                <th scope="row">{products.id}</th>
                <td>{products.productName}</td>
                <td>{products.unitPrice}</td>
                <td>{products.quantityPerUnit}</td>
                <td>{products.unitsInStock}</td>
                <td><Button color="info">add</Button></td>


              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
