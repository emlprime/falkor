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
  resolved: "resolved",
  active: "active",
  planned: "planned",
};

export const colors = {
  resolved: "#17435e",
  active: "#5a0d51",
  planned: "#31CBFF",
  selected: "#31CBFF",
  deselected: "#17435e",

  unplannedResolved: "#4F274B",
  unplannedRemaining: "#F02E65",

  income: "#006600",
  balance: "#33CC33",
  fixedExpenses: "#F66",
  variableExpenses: "#C00",
};

export const baseProgressRadius = 100;
export const progressWidth = 30;
export const ringGap = 20;

export const itemWidth = 200;
export const gap = 15;
