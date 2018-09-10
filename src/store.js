import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './redux/modules'
import thunk from 'redux-thunk'

export default function configureStore() {
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
  )

  const store = createStore(rootReducer, enhancer)

  return store
}