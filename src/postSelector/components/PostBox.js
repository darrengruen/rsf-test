import React, { PropTypes } from 'react'
import * as Actions from '../actions'

const postBox = props => <div className="row">
    <div className="col-xs-12 col-md-6 col-lg-3">
        <div className="form-group">
            <label htmlFor="post_select">Select sub-reddit</label>
            <input
                className="form-control"
                onChange={ (c) => props.store.dispatch(Actions.updateSelected(c.target.value)) }
                type="text"
                value={ props.postSelect } id="post_select"
            />
        </div>
    </div>
</div>

postBox.propTypes = { postSelect: PropTypes.string }

export default postBox
