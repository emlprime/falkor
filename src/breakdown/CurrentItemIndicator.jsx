import {colors} from "../global/constants";

const width = 200;

export function CurrentItemIndicator({originX, originY}) {
  const d = `M0 0H${width + 20}V200 H40 L0 160 V0`;

  return (
    <svg x={originX} y={originY}>
      <path d={d} stroke={colors.SELECTED} fill="transparent" />
    </svg>
  );
}
