import { combineReducers } from 'redux'
import candidateReducer from './candidate-reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  candidate: candidateReducer,
  form: formReducer
})

export default rootReducer
