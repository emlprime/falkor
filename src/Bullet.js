import * as R from "ramda";
import { colors } from "./constants";

const { prop } = R;

export const Bullet = ({ status }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox={`0 0 60 60`}
    width={60}
    height={60}
  >
    <circle cx="30" cy="30" r="30" stroke={colors.resolved} strokeWidth="3" fill="transparent" />
    <circle cx="30" cy="30" r="10" fill={prop(status, colors)} />
  </svg>
);
