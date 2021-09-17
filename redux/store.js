import { createStore, applyMiddleware } from "react-redux";
import 中间件 from 'redux-thunk'
import reducer from './reducer'
const store = createStore(reducer, applyMiddleware(中间件))

export default store