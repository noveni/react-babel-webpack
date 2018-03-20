import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { homePageReducer } from './modules/HomePage'
import { aboutPageReducer } from './modules/AboutPage'
import { languageProviderReducer } from './modules/LanguageProvider'

const configureStore = () => {
  return createStore(combineReducers({
    homePageReducer,
    aboutPageReducer,
    languageProviderReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  )
}
export default configureStore