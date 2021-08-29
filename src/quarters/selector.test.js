import * as R from "ramda";
import {getRecordIdsFor} from "./selectors";
import {initialState as state} from "../testInitialState";

const {pipe, prop, map} = R;

describe("With quarters relative to a Project", () => {
  test("Show the list of interesting quarters", () => {
    const expectation = ["abc123", "def234", "fds343", "xcy343"];
    const result = 
      getRecordIdsFor("abc123") (state);
    expect(result).toEqual(expectation);
  });
});
