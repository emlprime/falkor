import * as R from "ramda";
import { colors } from "./constants";

const { prop, equals } = R;

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * -1 * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y].join(" ");

  return d;
}

export const ArcNemesis = ({ radius, size = "big", status, startPercent = 0, endPercent = 0 }) => {
  const x = 200;
  const y = 200;

  const startAngle = (startPercent / 100) * 360;
  const endAngle = (endPercent / 100) * 360;
  const arcConfig = describeArc(x, y, radius, startAngle, endAngle);

  const strokeWidth = equals("big", size) ? 15 : 5;

  return (
    <path
      d={arcConfig}
      stroke={prop(status, colors)}
      strokeWidth={strokeWidth}
      fill="transparent"
    />
  );
};

export const ArcBig = (props) => <ArcNemesis size="big" {...props} />;
export const ArcSmall = (props) => <ArcNemesis size="small" {...props} />;
