import { UserActionTypes } from './user.types' 

const INITIAL_STATE = {
	currentUser: null
}

const userReducer = (_state = INITIAL_STATE, _action) => {
	switch (_action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				..._state, 
				currentUser: _action.payload
			}
		default:
			return _state
	}
}

export default userReducer