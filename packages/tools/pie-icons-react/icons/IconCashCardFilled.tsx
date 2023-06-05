import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCashCardFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--cash-card-filled", className, iconSize, "IconCashCardFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M11.605 4.771v-.875a1.426 1.426 0 0 0-1.418-1.417H2.532a1.426 1.426 0 0 0-1.426 1.417v.875h10.5Z" /><path fill="#242E30" d="M3.284 6.749h8.321v-.665h-10.5V8.49a1.426 1.426 0 0 0 1.426 1.426h.753V6.75Z" /><path fill="#242E30" d="M4.596 8.061v5.793h10.08V8.06H4.596Zm5.04 3.973a1.077 1.077 0 1 1 0-2.154 1.077 1.077 0 0 1 0 2.154Z" /></svg>;
};
export default IconCashCardFilled;