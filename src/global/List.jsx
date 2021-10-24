import {useCallback, useMemo} from "react";
import * as R from "ramda";
import {useSelector} from "react-redux";
import {getItemsByParent} from "./selectors";
import {ListItem} from "./ListItem";
import {getParentModel} from "./utils";
import {ButtonText} from "./Button";

const {always, append, curry, find, map, prop, propEq} = R;

const fillQuarters = always(["2021-Q3", "2021-Q4"]);
const fillReleases = always(["R161", "R162", "R163"]);
const fillSprints = always(["WEEK1", "WEEK2"]);
const fillDays = always(["MON", "TUE"]);

const fillFuncs = {
  projects: fillQuarters,
  quarters: fillReleases,
  releases: fillSprints,
  sprints: fillDays,
};

export const List = curry((model, ancestry) => () => {
  const parentModel = getParentModel(model);
  const currentAncestorAtModel = useMemo(
    () => find(propEq("model", parentModel), ancestry),
    [model, ancestry],
  );

  const items = useSelector(getItemsByParent(currentAncestorAtModel));
  const handleFill = useCallback(() => {
    const fillFunc = prop(model, fillFuncs);
    console.log("fill ", model, ancestry, items, fillFunc());
  }, [ancestry, items]);

  return (
    <ul>
      {map(({model, id}) => {
        const itemKey = {model, id};
        return (
          <ListItem
            key={`${model}:${id}`}
            itemKey={itemKey}
            ancestry={append(itemKey, ancestry)}
          />
        );
      }, items)}
      <li>
        <ButtonText onClick={handleFill}>FILL</ButtonText>
      </li>
    </ul>
  );
});
