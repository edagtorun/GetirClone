import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from 'redux-thunk';  // Redux Thunk middleware
import { composeWithDevTools } from '@redux-devtools/extension';
import cartItems from "./reducers/cartItem";
const middlewares = [thunk];  // Middleware dizisi

const reducers= combineReducers({
    cartItems:cartItems,
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
)


export default store
