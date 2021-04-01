import { CHECK_USER } from '../constant/Actiontypes';



export function checkAvailability(id) {
    return dispatch => {
        dispatch({
            type: CHECK_USER,
            payload: id
        })
    }
}
