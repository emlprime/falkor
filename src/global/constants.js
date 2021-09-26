export const NAME = "global";

export const scopes = ["projects", "quarters", "releases", "sprints", "days"];

export const knownModels = {
  projects: "projects",
  quarters: "quarters",
  releases: "releases",
  sprints: "sprints",
  days: "days",
};

export const knownStatuses = {
  RESOLVED: "RESOLVED",
  ACTIVE: "ACTIVE",
  PLANNED: "PLANNED",
};

export const colors = {
  RESOLVED: "#17435e",
  ACTIVE: "#5a0d51",
  PLANNED: "#31CBFF",
  SELECTED: "#31CBFF",
  DESELECTED: "#17435e",

  UNPLANNED_RESOLVED: "#4F274B",
  UNPLANNED_REMAINING: "#F02E65",

  INCOME: "#006600",
  BALANCE: "#33CC33",
  FIXED_EXPENSES: "#F66",
  VARIABLE_EXPENSES: "#C00",
};

export const baseProgressRadius = 100;
export const progressWidth = 30;
export const ringGap = 20;

export const itemWidth = 200;
export const gap = 15;
