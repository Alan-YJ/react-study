import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
const composeEnchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enchaner = composeEnchers(applyMiddleware(thunk))

const store = createStore(reducer,enchaner)
export default store

