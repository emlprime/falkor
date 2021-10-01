export const initialState = {
  byId: {
    abc123: {
      id: "abc123",
      model: "sprints",
      label: "Week 1",
      releaseId: {model: "releases", id: "abc123"},
      status: "RESOLVED",
    },
    def234: {
      id: "def234",
      model: "sprints",
      label: "Week 2",
      releaseId: {model: "releases", id: "abc123"},
      status: "ACTIVE",
    },
    fds343: {
      id: "fds343",
      model: "sprints",
      label: "Week 3",
      releaseId: {model: "releases", id: "abc123"},
      status: "PLANNED",
    },
  },
};
