export const initialState = {
  byId: {
    abc123: {
      id: "abc123",
      model: "tickets",
      label: "Work for Goal 1 for Project abc123 for 2021-Q3",
      parentId: {model: "quarters", id: "abc123"},
      goalId: {model: "goals", id: "abc123"},
      status: "RESOLVED",
    },
    def234: {
      id: "def234",
      model: "tickets",
      label: "Work for 2021Q3 Goal 2",
      parentId: {model: "quarters", id: "abc123"},
      goalId: {model: "goals", id: "abc123"},
      status: "RESOLVED",
    },
    qwerty: {
      id: "qwerty",
      model: "tickets",
      label: "Work for 2021Q4",
      parentId: {model: "quarters", id: "def234"},
      goalId: {model: "goals", id: "abc123"},
      status: "RESOLVED",
    },
    rewqo1: {
      id: "rewqo1",
      model: "tickets",
      label: "Work for 2022Q1",
      parentId: {model: "quarters", id: "fds343"},
      goalId: {model: "goals", id: "abc123"},
      status: "RESOLVED",
    },
  },
};
