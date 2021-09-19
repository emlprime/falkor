export const initialState = {
  byId: {
    abc123: {
      id: "abc123",
      model: "tickets",
      label: "Work for 2021Q3 Goal 1",
      parentId: {model: "quarters", id: "abc123"},
      goalId: {model: "goals", id: "abc123"},
      status: "resolved",
      estimatedSegments: 1,
      acutalSegments: 1,
    },
  },
};
