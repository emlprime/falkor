import {useState} from "react";
import {useSpring} from "react-spring";

export function useAnimatedPath({toggle}) {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
  });

  return {
    style: animatedStyle,
    ref: ref => {
      // The ref is `null` on component unmount
      if (ref) {
        setLength(ref.getTotalLength());
      }
    },
  };
}
