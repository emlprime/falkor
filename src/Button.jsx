import {useCallback} from "react";
import * as R from "ramda";
import styled from "styled-components";
import {colors} from "./global/constants";
import {Trash, Decompose} from "./icons";

const {prop} = R;

const size = 24;
export function Button({name, originX, originY}) {
  const onClick = useCallback(() => {
    console.log("button clicked", name);
  }, [name]);
  const Icon = prop(name, {trash: Trash, decompose: Decompose});
  return (
    <svg>
      <circle
        cx={originX}
        cy={originY}
        r={size}
        stroke={colors.selected}
        strokeWidth="1"
        fill="transparent"
      />
      <foreignObject
        x={originX - 12}
        y={originY - 8}
        width={size}
        height={size}
      >
        <Style type="button" onClick={onClick}>
          <Icon />
        </Style>
      </foreignObject>
    </svg>
  );
}

const Style = styled.button`
  background-color: transparent;
  border: none;
`;
