import {colors} from "./global/constants";
import {Button} from "./Button";

export function CurrentActions({originX, originY}) {
  return (
    <svg>
      <circle
        cx={originX}
        cy={originY}
        r={80}
        stroke={colors.selected}
        strokeWidth="1"
        fill="transparent"
      />
      <Button name="trash" originX={originX - 30} originY={originY} />
      <Button name="decompose" originX={originX + 30} originY={originY} />
    </svg>
  );
}
