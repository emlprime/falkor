import {useCallback} from "react";
import {animated} from "react-spring";
import * as R from "ramda";
import {colors} from "./constants";
import {useAnimatedPath} from "./useAnimatedPath";

const {prop, propOr} = R;

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

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    1,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

export const ArcNemesis = ({
  center = 200,
  radius,
  size = "big",
  status,
  startPercent = 0,
  endPercent = 0,
  handleClick,
  toggle,
}) => {
  const animationProps = useAnimatedPath({toggle});
  const onClick = useCallback(() => {
    handleClick(status);
  }, [handleClick]);
  const x = center;
  const y = center;

  const startAngle = (startPercent / 100) * 360;
  const endAngle = (endPercent / 100) * 360;
  const arcConfig = describeArc(x, y, radius, startAngle, endAngle);

  const strokeWidth = propOr(5, size, {big: 15, huge: 30});

  return (
    <animated.path
      {...animationProps}
      d={arcConfig}
      stroke={prop(status, colors)}
      strokeWidth={strokeWidth}
      fill="transparent"
      onClick={onClick}
    />
  );
};

export const ArcBig = props => <ArcNemesis size="big" {...props} />;
export const ArcSmall = props => <ArcNemesis size="small" {...props} />;
