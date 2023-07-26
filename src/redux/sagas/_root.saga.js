import { all, takeLatest } from 'redux-saga/effects';
import sagaFetchWorkouts from './workouts.saga';

export default function* rootSaga() {
    yield all([
        sagaFetchWorkouts(),

    ])
}