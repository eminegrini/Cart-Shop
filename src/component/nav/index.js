import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'


// // Actions:
import { showList, addToCart} from '../../redux/modules/cart/actions'


// //component
import NavBar from './navbar'

const mapStateToProps = state => {
  console.log('states', state)
  return {
    list: state.cart.listJson,
    selectedItem: state.cart.selectedItem,
    cartPrice: state.cart.cartPrice,
    showCart: state.cart.cart,
  }
}

const mapDispatchToProps = dispatch => ({
  showList: bindActionCreators(showList, dispatch),
  addToCart: bindActionCreators(addToCart, dispatch),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))