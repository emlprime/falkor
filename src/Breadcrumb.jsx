import {BreadcrumbQuarter} from "./BreadcrumbQuarter";

export const Breadcrumb = ({originX, originY}) => {
  return (
    <g>
      <foreignObject x={180} y={290} height="300px" width="230px">
        <h1>Resources</h1>
      </foreignObject>
          <BreadcrumbQuarter originX={originX} originY={originY}/>
    </g>
  );
};
