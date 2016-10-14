import { actions } from '../cache'
import debounce from 'lodash/debounce'
import * as C from './constants'

console.info(actions)

export const request = subreddit => ({
    type: C.REQUEST,
    selected: subreddit
})

export const receive = (selected, json) => ({
    type: C.RECEIVE,
    selected,
    items: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
})

export const fetchPosts = sub => debounce(((sub) => {
    return (dispatch) => {
        dispatch(request(sub))
        return fetch(`http://www.reddit.com/r/${sub}.json`)
            .then(response => response.json())
            .then(json => {
                dispatch(receive(sub, json))
                dispatch(actions.update(sub, json.data.children.map(child => child.data)))
            })
    }
})(sub), 500)

export const select = (selected) => ({ type: C.SELECT, selected })
