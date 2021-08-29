import * as t from "./actionTypes";

const initialState = {
  allIds: ["abc123", "def234", "fds343", "xcy343"],
  byId: {
    abc123: {label: "MON"},
    def234: {label: "TUE"},
    fds343: {label: "WED"},
    xcy343: {label: "THU"},
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return [];
    default:
      return state;
  }
};

export default reducer;
