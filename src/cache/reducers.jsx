import * as C from './constants'

const reducer = (state = {}, action) => {
    switch (action.type) {
    case C.CLEAR:
        // Ewwwwwww.... mutations
        delete state[action.index]
        return state
        break;
    case C.UPDATE:
        return Object.assign({}, state, { [action.index]: action.newData })
    default:
        return state
    }
}

export default reducer
