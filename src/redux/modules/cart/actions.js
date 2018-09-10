
import { json } from '../../../component/mock'
//import actions
import {
    SHOW_LIST,
    ADD_TO_CART,

} from './const'

//action go
export const showList
    = () => ({
        type: SHOW_LIST,
        payload: json
    })

    
export const addToCart
    = (product) => ({
        type: ADD_TO_CART,
        payload: product
    })


