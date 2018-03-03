import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { homePageReducer } from './modules/HomePage'
import { aboutPageReducer } from './modules/AboutPage'

const configureStore = () => {
  return createStore(combineReducers({
    homePageReducer,
    aboutPageReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  )
}
export default configureStore