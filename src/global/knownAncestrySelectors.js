import {getAncestryByDescendents as ancestrySelectorProjects} from "../projects/selectors";
import {getAncestryByDescendents as ancestrySelectorQuarters} from "../quarters/selectors";
import {getAncestryByDescendents as ancestrySelectorReleases} from "../releases/selectors";
import {getAncestryByDescendents as ancestrySelectorSprints} from "../sprints/selectors";

export const knownAncestrySelectors = {
  projects: ancestrySelectorProjects,
  quarters: ancestrySelectorQuarters,
  releases: ancestrySelectorReleases,
  sprints: ancestrySelectorSprints,
};
