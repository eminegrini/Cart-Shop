import React, { Component } from 'react';
import '../App.css';



class Price extends Component {

  renderProducts = () => this.props.cart.map((prod, i) => (
    <div className='listTotal' key={i}>
      <table>
        <tr>
          <td className='prodTitle'>{prod.title}</td>
          <td className='prodCant'> X {prod.quantity}</td>
          <td className='prodPrice'>{prod.price}</td>
          <td className='totalPrice'>{prod.price*prod.quantity}</td>
        </tr>
      </table>
    </div>
  )
  )

  render() {

    return (
      <div className='top'>
        <h2>Carrito de Compras</h2>
        <div className='listTotal'>
        <table>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th className='price'>Precio</th>
            <th className='totalPrice'>Total</th>
          </tr>
        </table>
        </div>
        {this.renderProducts()}
        <div className='totalCost'>
        <th classname='cost'> Costo Total  $ {this.props.cartPrice}</th>
        </div>
      </div >
    )
  }
}


export default Price