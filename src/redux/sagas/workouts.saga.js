import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* fetchWorkout(action) {
    const bodyPartId = action.payload;
    try {
        const workouts = yield axios.get(`/api/workouts/${bodyPartId}`);
        const bodyPart = workouts.data;
        yield put({
            type: 'SET_BODY_PART_WORKOUT',
            payload: bodyPart
        })
    } catch (err) {
        console.log('getting workouts err', err);
    }
}

function* sagaFetchWorkouts() {
    yield takeLatest ('FETCH_WORKOUTS', fetchWorkout)
}

export default sagaFetchWorkouts;