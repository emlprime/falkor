import * as R from "ramda";
import {useCurrentRecordIds} from "./hooks";
import {ProgressChart} from "../global/ProgressChart";

const {map, addIndex} = R;

const mapWithIndex = addIndex(map);

const swimlanes = [
  [["resolved", [0, 40]], ["active", [40, 60]], ["planned", [60, 99.9]]],
  [["resolved", [0, 40]], ["active", [40, 60]], ["planned", [60, 99.9]]],
  [["resolved", [0, 20]], ["active", [20, 60]], ["planned", [60, 99.9]]],
  [["resolved", [0, 40]], ["active", [40, 60]], ["planned", [60, 99.9]]],
];

// create a subcomponent to display progress here

export const ChosenFocus = ({originX, originY}) => {
  const {label, recordIds} = useCurrentRecordIds();
  console.log(recordIds);
  const handleClick = value => {
    console.log("Chosen Focusvalue:", value);
  };
  const width = 130;
  const height = 40;

  return (
    <g>
      <foreignObject
        x={originX - width / 2}
        y={originY - height / 2}
        height={height}
        width={width}
      >
        <h2>{label}</h2>
      </foreignObject>
      {mapWithIndex(
        (values, i) => (
          <ProgressChart
            key={i}
            originX={originX}
            originY={originY}
            radius={80 + i * 10}
            values={values}
            handleClick={handleClick}
            width={5}
          />
        ),
        swimlanes,
      )}
    </g>
  );
};
