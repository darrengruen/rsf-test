import debounce from 'lodash/debounce'
import * as C from './constants'

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

export const fetchPosts = (subreddit) => {
    // Wrapping the function that is returned
    // with a debounce only delays ALL the function
    // calls for the specified time
    return (dispatch) => {

        dispatch(request(subreddit))
        // wrapping the fetch call with debounce will not work
        // It does not return a function which redux is expecting
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receive(subreddit, json)))
    }
}

export const select = (selected) => ({
    type: C.SELECT,
    selected,
})
