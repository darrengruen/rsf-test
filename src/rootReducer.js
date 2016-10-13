import { combineReducers } from 'redux'
import { reducers as subreddit } from './subreddit'

const reducer = combineReducers({ subreddit })

export default reducer
