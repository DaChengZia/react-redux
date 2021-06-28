const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'INCREASE':
            return {
                count: state.count + action.payload
            }
        case 'DECREASE':
            return {
                count: state.count - action.payload
            }
        default: 
            return state
    }
}