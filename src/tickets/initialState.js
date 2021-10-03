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
      status: "ACTIVE",
    },
    rewqo1: {
      id: "rewqo1",
      model: "tickets",
      label: "Work for 2022Q1",
      parentId: {model: "quarters", id: "fds343"},
      goalId: {model: "goals", id: "abc123"},
      status: "PLANNED",
    },
    aaaa: {
      id: "aaaa",
      model: "tickets",
      label: "Goal for Release 157 Quarter Goal 2",
      parentId: {model: "releases", id: "abc123"},
      goalId: {model: "goals", id: "def234"},
      status: "RESOLVED",
    },
    bbbb: {
      id: "bbbb",
      model: "tickets",
      label: "Goal for Release 157 Quarter Goal 2 B",
      parentId: {model: "releases", id: "abc123"},
      goalId: {model: "goals", id: "def234"},
      status: "ACTIVE",
    },
    cccc: {
      id: "cccc",
      model: "tickets",
      label: "Goal for Release 158 Quarter Goal 1",
      parentId: {model: "releases", id: "def234"},
      goalId: {model: "goals", id: "def234"},
      status: "PLANNED",
    },
    ttttt: {
      id: "ttttt",
      model: "tickets",
      label: "Work for sprint 158:week1 Goal 1",
      parentId: {model: "sprints", id: "abc123"},
      goalId: {model: "goals", id: "poiu23"},
      status: "RESOLVED",
    },
    ppppp: {
      id: "ppppp",
      model: "tickets",
      parentId: {
        model: "sprints",
        id: "def234",
      },
      goalId: {
        model: "goals",
        id: "poiu23",
      },
      label: "bar",
      status: "ACTIVE",
    },
  },
};
