import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router";


// // Actions:
import { showList, addToCart } from '../../redux/modules/cart/actions'


// //component
import Price from './price'

const mapStateToProps = state => {
  console.log('states', state)
  return {
    list: state.cart.listJson,
    selectedItem: state.cart.selectedItem,
    cartPrice: state.cart.cartPrice,
    cart: state.cart.cart,
  }
}

const mapDispatchToProps = dispatch => ({
  showList: bindActionCreators(showList, dispatch),
  addToCart: bindActionCreators(addToCart, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Price))