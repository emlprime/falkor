import {put, call} from "redux-saga/effects";
import {NAME} from "./constants";
import * as actions from "./actions";
import {fetchAll} from "../services";

export function* fetchData() {
  const data = yield call(fetchAll, NAME);
  const records = actions.loadData(data);
  yield put(records);
}
