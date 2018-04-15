import { FETCH_NEWSLETTERS } from '../actions/types';

const initalState = {
    archive: [],
    todaysNewsletter: {}
}

export default function(state = initalState, action) {
    switch (action.type) {
        case FETCH_NEWSLETTERS:
            return {
                ...state,
                archive: action.payload
            }
        default:
            return state
    }
}