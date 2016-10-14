import map from 'lodash/map'
import React from 'react'
import { PostBox } from '../../postSelector'
import { SubReddit } from '../../subreddit'

const home = props => <div className="container-fluid">
    <h1>Real SoftWorks</h1>
    <PostBox { ...props } />
    { props.state.subreddit.isLoading && <h2 className="text-center">Loading</h2>}
    {
            props.state.subreddit.items ?
            map(props.state.subreddit.items, (sr, ind) => <SubReddit subreddit={ sr } key={ ind } /> ) :
            null
    }
    {/* render subreddits here */}
</div>

export default home
