import {colors} from "./constants";

export function SelectionIndicator({width}) {
  const d = `M0 0H${width - 25}L${width} 22V140H30L0 113V0Z`;
  return (
    <path
      x={0}
      y={0}
      d={d}
      fill="transparent"
      stroke={colors.selected}
      strokeWidth={1}
    />
  );
}
