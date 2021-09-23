export const initialState = {
  byId: {
    abc123: {
      id: "abc123",
      model: "goals",
      label: "Goal 1 for Project abc123",
      parentId: {model: "projects", id: "abc123"},
      status: "resolved",
    },
    def234: {
      id: "def234",
      model: "goals",
      label: "Quarter Goal 2",
      parentId: {model: "quarters", id: "abc123"},
      status: "active",
    },
    qwerty1: {
      id: "qwerty1",
      model: "goals",
      label: "Quarter Goal 3",
      parentId: {model: "quarters", id: "abc123"},
      status: "active",
    },
    fdsfds3: {
      id: "fdsfds3",
      model: "goals",
      label: "Quarter Goal 4",
      parentId: {model: "quarters", id: "def234"},
      status: "resolved",
    },
    poiu23: {
      id: "poiu23",
      model: "goals",
      label: "Release Goal 1",
      parentId: {model: "releases", id: "abc123"},
      status: "active",
    },
    y3f3f4: {
      id: "y3f3f4",
      model: "goals",
      label: "Release Goal 2",
      parentId: {model: "releases", id: "abc123"},
      status: "active",
    },
  },
};
