import {takeEvery, all} from "redux-saga/effects";
import {fetchData as fetchProjectData} from "./projects/sagas";
import {fetchData as fetchQuartersData} from "./quarters/sagas";
import {fetchData as fetchReleasesData} from "./releases/sagas";
import {fetchData as fetchSprintsData} from "./sprints/sagas";
import {fetchData as fetchDaysData} from "./days/sagas";
import {
  fetchData as fetchTicketsData,
  create as createTicket,
} from "./tickets/sagas";
import {fetchData as fetchGoalsData} from "./goals/sagas";
import * as ticketActionTypes from "./tickets/actionTypes";

// eslint-disable-next-line require-yield
function* init() {
  yield fetchProjectData();
  yield fetchQuartersData();
  yield fetchReleasesData();
  yield fetchSprintsData();
  yield fetchDaysData();
  yield fetchTicketsData();
  yield fetchGoalsData();
}

function* createTicketSaga() {
  yield takeEvery(ticketActionTypes.CREATE, createTicket);
}

export default function* rootSaga() {
  yield all([createTicketSaga(), init()]);
}
