import {put, call} from "redux-saga/effects";
import {NAME} from "./constants";
import * as actions from "./actions";
import {fetchAll, createItem} from "../services";

export function* fetchData() {
  const data = yield call(fetchAll, NAME);
  const records = actions.loadData(data);
  yield put(records);
}

export function* create(action) {
  const data = yield call(createItem(NAME), action);
  const records = actions.loadData(data);
  console.log(`tickets records:`, records);
  yield put(records);
}
