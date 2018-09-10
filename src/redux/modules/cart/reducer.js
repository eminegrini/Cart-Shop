// //initial state
import initialState from './initialState'
import {
  SHOW_LIST,
  ADD_TO_CART,
} from './const';

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LIST: {
      return {
        ...state,
        listJson: action.payload.todos
      }
    }
    //Accion añadir al carrito
    case ADD_TO_CART: {

      //Guardamos una COPIA del estado
      const cart = [...state.cart]

      //Busca el indice del obj si es que existe, si no devuelve -1
      const index = cart.findIndex(item => item.id === action.payload.id)

      //Si existe el objeto hace esto:
      if (index !== -1) {

        //Guarda el item en la posicion existente
        const item = cart[index]

        //Modifica un item del arreglo segun su index y modifica dicho item
        //aumentado su quantity anterior en 1
        cart.splice(index, 1, {...action.payload, quantity: item.quantity + 1})

      } 
      //Si no existe
      else {
        //Guarda el item NUEVO con cantidad inicial 1.
        cart.push({...action.payload, quantity: 1})
      }


      return {
        ...state,
        cartPrice: state.cartPrice + action.payload.price,
        cart,
      }
    }

console.log(state.cart)
    default:
      return state
  }
}


