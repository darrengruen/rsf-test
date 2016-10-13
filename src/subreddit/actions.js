import * as C from './constants'

export const request = subreddit => ({ type: C.REQUEST, selected: subreddit })
export const receive = (selected, json) => ({
    type: C.RECEIVE,
    selected,
    items: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
})

export const fetchPosts = (subreddit) => {
    return (dispatch) => {

        dispatch(request(subreddit))

        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receive(subreddit, json)))
    }
}

export const select = (selected) => ({
    type: C.SELECT,
    selected,
})
