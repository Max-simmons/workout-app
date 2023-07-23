const bodyPartWorkoutReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BODY_PART_WORKOUT':
            return action.payload;
        default:
            return state
    }
}

export default bodyPartWorkoutReducer;