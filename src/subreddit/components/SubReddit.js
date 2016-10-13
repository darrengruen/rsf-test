import moment from 'moment'
import React from 'react'

const subReddit = props => <div className="row">
    <div className="col-xs-12">
        <div className="well well-sm">
            {/* title */}
            <a href={ `http://www.reddit.com${props.subreddit.permalink}`} target="_blank">
                { props.subreddit.title }
            </a>
            <br />
            {/* author */}
            { props.subreddit.author }
            <br />
            {/* karma */}
            { props.subreddit.score}
            <br />
            {/* date */}
            { moment(props.subreddit.created, 'X' ).format('DD/MM/YYYY') }
        </div>
    </div>
</div>

export default subReddit
