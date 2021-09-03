import * as R from "ramda";
import {add} from "./actions";
import {initialState} from "./initialState";
import reducer from "./reducer";

const {path} = R;

describe("Releases reducer", () => {
  test("with addRelease", () => {
    const data = {id: "testid", label: "Release 161"};
    const result = reducer(initialState, add(data));

    expect(path(["byId", "testid"], result)).toEqual(data);
  });
});
