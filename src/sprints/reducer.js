import * as t from "./actionTypes";

const initialState = [
  {
    allIds: ["abc123", "def234", "fds343", "xcy343"],
    byId: {
      abc123: {label: "Week 1"},
      def234: {label: "Week 2"},
      fds343: {label: "Week 3"},
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
