import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* fetchWorkout(action) {
    const gameId = action.payload;
    try {
        const game = yield axios.get(`/apiworkouts/${bodyPartId}`);
        const bodyPart = bodyPart.data;
        yield put({
            type: 'SET_BODY_PART',
            payload: bodyPart
        })
    } catch (err) {
        console.log('getting workouts err', err);
    }
}