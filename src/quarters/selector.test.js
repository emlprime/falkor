import * as R from "ramda";
import {getRecordsFor} from "./selectors";
import {initialState as state} from "../testInitialState";

const {pipe, prop, map} = R;

describe("With quarters relative to a Project", () => {
  test("Show the list of interesting quarters", () => {
    const expectation = ["2021-Q3", "2021-Q4", "2022-Q1", "2022-Q2"];
    const result = pipe(
      getRecordsFor("abc123"),
      map(prop("label")),
    )(state);
    expect(result).toEqual(expectation);
  });
});
