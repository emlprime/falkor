import {put, call} from "redux-saga/effects";
import {path} from "ramda";
import {NAME} from "./constants";
import * as actions from "./actions";
import {fetchAll, createItem, deleteItem as serviceDelete} from "../services";

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

export function* deleteItem(action) {
  const item = path(["payload", "item"], action);
  console.log(`item:`, item);
  yield call(serviceDelete, item);

  const unload = actions.unloadItem(item);

  yield put(unload);
}
