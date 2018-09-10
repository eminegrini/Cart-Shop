import React, { Component } from 'react';
import '../App.css';
import item from '../item.jpeg'


class Cart extends Component {
  componentDidMount() {
    this.props.showList()
  }

  addToCart = (product) => {
    this.props.addToCart(product)
  }

  render() {
    const products = this.props.list.map((product, i) => {
      return (
        <div className='card' key={i}>
          <div className='title'>
            {product.title}
          </div>
          <div className='description'>
            {product.description}
          </div>
          <img src={item} className='productImg' />
          <div className='precio'>
            ${product.price}
            <div className='button'>
              <button onClick={() => this.addToCart(product)}>Add to cart</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <div className='cardContainer'>
          {products}
        </div>
      </div>
    );
  }
}

export default Cart;
