import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLoading = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--loading", className, iconSize, "IconLoading");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M14.781 8A6.782 6.782 0 1 1 8 1.219V2.53A5.469 5.469 0 1 0 13.469 8h1.312ZM4.72 8H6.03A1.969 1.969 0 1 1 8 9.969v1.312A3.282 3.282 0 1 0 4.719 8Z" /></svg>;
};
export default IconLoading;