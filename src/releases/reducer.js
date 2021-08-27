import * as t from "./actionTypes";

const initialState = [
  {
    allIds: ["abc123", "def234", "fds343", "xcy343"],
    byId: {
      abc123: {label: "Release 157"},
      def234: {label: "Release 158"},
      fds343: {label: "Release 159"},
      xcy343: {label: "Release 160"},
    },
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return [];
    default:
      return state;
  }
};

export default reducer;
