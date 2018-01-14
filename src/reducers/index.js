import { combineReducers } from 'redux'
import GistsReducers from './reducer_gists'

const rootReducer = combineReducers({
  gists: GistsReducers
})

export default rootReducer;
