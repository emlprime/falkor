export const initialState = {
  byId: {
    abc123: {
      id: "abc123",
      model: "releases",
      label: "Release 157",
      parentId: {model: "quarters", id: "abc123"},
      status: "RESOLVED",
    },
    def234: {
      id: "def234",
      model: "releases",
      label: "Release 158",
      parentId: {model: "quarters", id: "abc123"},
      status: "ACTIVE",
    },
    fds343: {
      id: "fds343",
      model: "releases",
      label: "Release 159",
      parentId: {model: "quarters", id: "abc123"},
      status: "PLANNED",
    },
    xcy343: {
      id: "xcy343",
      model: "releases",
      label: "Release 160",
      parentId: {model: "quarters", id: "abc123"},
      status: "PLANNED",
    },
    qqqqqq: {
      id: "qqqqqq",
      model: "releases",
      label: "Release 161",
      parentId: {model: "quarters", id: "def234"},
      status: "RESOLVED",
    },
    wwwwww: {
      id: "wwwwww",
      model: "releases",
      label: "Release 162",
      parentId: {model: "quarters", id: "def234"},
      status: "RESOLVED",
    },
    rrrrrr: {
      id: "rrrrrr",
      model: "releases",
      label: "Release 163",
      parentId: {model: "quarters", id: "def234"},
      status: "ACTIVE",
    },
    tttttt: {
      id: "tttttt",
      model: "releases",
      label: "Release 164",
      parentId: {model: "quarters", id: "def234"},
      status: "PLANNED",
    },
  },
};
