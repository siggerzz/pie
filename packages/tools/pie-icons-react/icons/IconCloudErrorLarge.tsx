import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCloudErrorLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--cloud-error-large", className, iconSize, "IconCloudErrorLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M26.019 14.731A10.045 10.045 0 0 0 6.2 13.375a6.309 6.309 0 0 0-3.938 5.863 6.387 6.387 0 0 0 6.388 6.387h15.487a5.609 5.609 0 0 0 5.6-5.6 5.68 5.68 0 0 0-3.718-5.294Zm-1.881 9.144H8.65a4.646 4.646 0 0 1-4.638-4.637 4.585 4.585 0 0 1 3.247-4.375A4.137 4.137 0 0 1 8.65 14.6c.453 0 .904.065 1.339.193l.525-1.672a6.572 6.572 0 0 0-2.389-.254 8.304 8.304 0 0 1 16.152 2.538v.691l.674.158a3.894 3.894 0 0 1 3.037 3.771 3.85 3.85 0 0 1-3.85 3.85Zm-4.454-9.879-2.45 2.441 2.45 2.442-1.243 1.242L16 17.671l-2.441 2.45-1.243-1.242 2.45-2.442-2.45-2.44 1.243-1.243L16 15.204l2.441-2.45 1.243 1.242Z" /></svg>;
};
export default IconCloudErrorLarge;