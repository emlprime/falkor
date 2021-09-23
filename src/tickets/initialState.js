export const initialState = {
  byId: {
    abc123: {
      id: "abc123",
      model: "tickets",
      label: "Work for Goal 1 for Project abc123 for 2021-Q3",
      parentId: {model: "quarters", id: "abc123"},
      goalId: {model: "goals", id: "abc123"},
      status: "resolved",
      estimatedSegments: 1,
      acutalSegments: 1,
    },
    def234: {
      id: "def234",
      model: "tickets",
      label: "Work for 2021Q3 Goal 2",
      parentId: {model: "quarters", id: "abc123"},
      goalId: {model: "goals", id: "def234"},
      status: "resolved",
      estimatedSegments: 1,
      acutalSegments: 1,
    },
    qwerty: {
      id: "qwerty",
      model: "tickets",
      label: "Release 159",
      parentId: {model: "releases", id: "abc123"},
      goalId: {model: "goals", id: "abc123"},
      status: "resolved",
      estimatedSegments: 1,
      acutalSegments: 1,
    },
  },
};
