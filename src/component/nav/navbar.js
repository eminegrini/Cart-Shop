import React, { Component } from 'react';
import '../App.css';
import cart from '../cart.png'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className='navigation'>
          <div className='navRight'>
            <Link to='/'> INICIO </Link>
            <Link to='/new'> NEW </Link>
          </div>
          <Link to='/price'>
            <img src={cart} className='cartImg' />
            Total $ {this.props.cartPrice}
          </Link>
        </nav>
      </div>
    )
  }
}
export default NavBar