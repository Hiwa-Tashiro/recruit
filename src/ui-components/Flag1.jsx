/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Flag1(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="15px"
      height="15px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
      paths={[
        {
          d: "M14 7.5C14 11.0899 11.0899 14 7.5 14L7.5 16C12.1944 16 16 12.1944 16 7.5L14 7.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5L-1 7.5C-1 12.1944 2.80558 16 7.5 16L7.5 14ZM1 7.5C1 3.91015 3.91015 1 7.5 1L7.5 -1C2.80558 -1 -1 2.80558 -1 7.5L1 7.5ZM7.5 1C11.0899 1 14 3.91015 14 7.5L16 7.5C16 2.80558 12.1944 -1 7.5 -1L7.5 1Z",
          stroke: "rgba(0,0,0,0.25)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5Z",
          fill: "rgba(105,120,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Flag1")}
      {...rest}
    ></Icon>
  );
}
