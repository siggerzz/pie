import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconNetworkError = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--network-error", className, iconSize, "IconNetworkError");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M13.189 3.013H9.05v5.46L4.824 1.437H3.3l3.063 5.11H2.81v6.44H6.95v-5.46l2.1 3.5v1.96h1.181l.945 1.575H12.7l-.937-1.574h1.427V3.011Zm-7.551 8.75H4.124V7.824h1.514v3.937Zm6.238 0h-.875l-.638-1.138V4.299h1.513v7.463Z" /></svg>;
};
export default IconNetworkError;