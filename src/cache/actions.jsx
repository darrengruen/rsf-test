import * as C from './constants'

export const clear = index => ({ type: C.CLEAR, index })

export const update = (index, newData) => ({
    type: C.UPDATE,
    index,
    newData,
    lastUpdated: Date.now(),
})
