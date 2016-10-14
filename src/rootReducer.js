import { combineReducers } from 'redux'
import { reducers as subreddit } from './subreddit'
import { reducers as cache } from './cache'

const reducer = combineReducers({ cache, subreddit })

export default reducer
