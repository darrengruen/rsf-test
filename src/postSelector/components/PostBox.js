import debounce from 'lodash/debounce'
import React, { PropTypes } from 'react'
import * as Actions from '../actions'
import throttle from 'lodash/throttle'
// Take a look at https://github.com/nkbt/react-debounce-input/blob/master/src/Component.js
import DebounceInput from 'react-debounce-input'

// The debounce is set high for testing. Real world would be more like 150
const postBox = props => <div className="row">
    <div className="col-xs-12 col-md-6 col-lg-3">
        <div className="form-group">
            <label htmlFor="post_select">Select sub-reddit</label>
            <DebounceInput
                minLength={ 2 }
                debounceTimeout={ 1000 }
                className="form-control"
                onChange={ (c) => {
                    c.persist()
                    throttle(props.store.dispatch(Actions.updateSelected(c.target.value)), 500)
                } }
                type="text"
                value={ props.postSelect } id="post_select"
            />
        </div>
    </div>
</div>

postBox.propTypes = { postSelect: PropTypes.string }

export default postBox
