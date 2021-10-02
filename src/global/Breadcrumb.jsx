import {useSelector} from "react-redux";
import {getCurrentProject, getByItem} from "./selectors";
import {useSetCurrentAncestry} from "./hooks";
import {Breadcrumb as BreadcrumbQuarter} from "../quarters/Breadcrumb";
import {ButtonText} from "./Button";

export const Breadcrumb = ({originX, originY}) => {
  const item = useSelector(getCurrentProject);
  const {label} = useSelector(getByItem(item));
  const onClick = useSetCurrentAncestry([item]);
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
        <ButtonText onClick={onClick}>
          <h1>{label}</h1>
        </ButtonText>
      </foreignObject>
      <BreadcrumbQuarter originX={originX} originY={originY} parentId={item} />
    </g>
  );
};
