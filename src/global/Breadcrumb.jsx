import {useSelector} from "react-redux";
import {getCurrentProject, getByItem} from "./selectors";
import {Breadcrumb as BreadcrumbQuarter} from "../quarters/Breadcrumb";

export const Breadcrumb = ({originX, originY}) => {
  const item = useSelector(getCurrentProject);
  const {label} = useSelector(getByItem(item));
  const width = 180;
  const height = 40;
  return (
    <g>
      <foreignObject
        x={originX - width / 2}
        y={originY - height / 2}
        height={height}
        width={width}
      >
        <h1>{label}</h1>
      </foreignObject>
      <BreadcrumbQuarter originX={originX} originY={originY} />{" "}
    </g>
  );
};
