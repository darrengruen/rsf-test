import * as C from './constants'
import { constants as PS } from '../postSelector'

const srReducer = (state = {
    isLoading: false,
    items: [],
    selected: '',
}, action) => {
    switch (action.type) {
    case PS.UPDATE:
        return Object.assign({}, state, { selected: action.selected })
    case C.REQUEST:
        return Object.assign({}, state, {
            isLoading: true,
            items:action.subreddits,
            selected: action.subreddit
        })
    case C.RECEIVE:
        return Object.assign({}, state, { isLoading: false, items: action.items, selected: action.selected })
    default:
        return state
    }
}

export default srReducer
