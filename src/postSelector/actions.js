import { Actions } from '../subreddit'

export const updateSelected = selected => (dispatch) => dispatch(Actions.fetchPosts(selected))
