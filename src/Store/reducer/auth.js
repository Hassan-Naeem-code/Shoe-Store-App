import { CHECK_USER, } from '../constant/Actiontypes';

const INIT_STATE = {
    viewToShow: 'ALL'
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHECK_USER:
            return {
                ...state,
                viewToShow: action.payload,
            }
        default:
            return state
    }
}