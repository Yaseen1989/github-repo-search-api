import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects'
import {actions, t} from './actions';
const baseUrl = 'https://api.github.com/search/repositories';

function* loadRepoData(action) {
    const response = yield axios.get(`${baseUrl}?q=${action.name}&sort=stars&order=desc`);
    yield put(actions.loadRepoDataSuccess(response.data))
}

function* resetRepoData(action) {
    yield put(actions.resetRepoData())
}

export function* watchLoadRepoData() {
    yield takeLatest(t.LOAD_REPO_DATA, loadRepoData)
}
