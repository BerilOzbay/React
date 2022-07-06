import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  state = {
    categories: []
  }

  componentDidMount(){
    this.getCategories();
  }

  //fetch js kısmından gelen Api kullanımını sağlayan fonksiyondur.
  //Adres bilgisi verilir, promise gelen data json verisine parse edilir
  // daha sonra da setState() fonksiyonu ile güncellenir.

  getCategories = () =>{
    fetch("http://localhost:3000/categories")
    .then(response => response.json())
    .then(data => this.setState({categories:data}));
  }

 
  render() {
    return (
      <div>

        <h3>{this.props.info.title}</h3>
        <ListGroup >
          {
            //map bir array'e uygulanır.
            this.state.categories.map(category => (
              <ListGroupItem active={category.categoryName === this.props.currentCategory ? true : false }
              onClick={() => this.props.changeCategory(category)} 
              key={category.id}>
              {category.categoryName}
              </ListGroupItem>
            ))
          }

        </ListGroup>
      </div>
    )
  }

}