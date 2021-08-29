import * as R from "ramda";
import {getRecordIdsFor, getRecordFor} from "./selectors";
import {initialState as state} from "../testInitialState";

const {pipe, prop, map} = R;

describe("With quarters relative to a Project", () => {
  test("Show the list of interesting quarters", () => {
    const expectation = ["abc123", "def234", "fds343", "xcy343"];
    const result = getRecordIdsFor("abc123")(state);
    expect(result).toEqual(expectation);
  });

  test.only("Show the detail for a specific quarter", () => {
    const expectation = {id: "abc123", label: "2021-Q3", projectId: "abc123"};
    const result = getRecordFor("abc123")(state);
    expect(result).toEqual(expectation);
  });
});
