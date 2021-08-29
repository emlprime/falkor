import * as R from "ramda";
import {getCurrentScope} from "./selectors";
import {initialState as state} from "../testInitialState";

describe("With a current scope set", () => {
  test("return the current scope", () => {
    const expectation = "sprints";
    const result = getCurrentScope()(state);
    expect(result).toEqual(expectation);
  });
});
