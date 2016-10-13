import * as C from './constants'
import { Actions } from '../subreddit'

export const updateSelected = selected => {
    return (dispatch) => {
        dispatch(Actions.fetchPosts(selected))
    }
}
