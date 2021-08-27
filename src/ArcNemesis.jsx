import {useState} from "react";
import {animated, useSpring, config} from "react-spring";
import {useCallback} from "react";
import * as R from "ramda";
import {colors} from "./constants";

const {prop} = R;

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
  originX,
  originY,
  radius,
  width,
  status,
  startPercent = 0,
  endPercent = 0,
  handleClick,
}) => {
  const [flip, set] = useState(false);
  const animatedProps = useSpring({
    to: {opacity: 1},
    from: {opacity: 0.6},
    reset: true,
    reverse: flip,
    config: config.molasses,
    delay: 200,
    onRest: () => set(!flip),
  });
  const onClick = useCallback(() => {
    handleClick(status);
  }, [handleClick]);
  const x = originX;
  const y = originY;

  const startAngle = (startPercent / 100) * 360;
  const endAngle = (endPercent / 100) * 360;
  const arcConfig = describeArc(x, y, radius, startAngle, endAngle);

  const strokeWidth = width;

  return (
    <animated.path
      d={arcConfig}
      stroke={prop(status, colors)}
      strokeWidth={strokeWidth}
      fill="transparent"
      onClick={onClick}
      {...animatedProps}
    />
  );
};

export const ArcBig = props => <ArcNemesis size="big" {...props} />;
export const ArcSmall = props => <ArcNemesis size="small" {...props} />;
