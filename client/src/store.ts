import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, composedEnhancer)

export default store