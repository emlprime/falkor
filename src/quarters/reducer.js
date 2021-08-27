import * as t from "./actionTypes";

const initialState = [
  {
    allIds: ["abc123", "def234", "fds343", "xcy343"],
    byId: {
      abc123: {label: "2021-Q3"},
      def234: {label: "2021-Q4"},
      fds343: {label: "2022-Q1"},
      xcy343: {label: "2022-Q2"},
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
