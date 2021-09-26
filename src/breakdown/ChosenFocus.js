import * as R from "ramda";
import {ProgressChart} from "../global/ProgressChart";
import {useChosenFocus} from "./hooks";

const {map, addIndex} = R;

const mapWithIndex = addIndex(map);

// create a subcomponent to display progress here

export const ChosenFocus = ({originX, originY}) => {
  const {label, swimlanes} = useChosenFocus();
  console.log(`swimlanes:`, swimlanes);

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
