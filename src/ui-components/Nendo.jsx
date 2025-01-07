/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Nendo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="243px"
      height="42px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Nendo")}
      {...rest}
    >
      <View
        width="154.88px"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="7.14%"
        left="0%"
        right="36.26%"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 244")}
      ></View>
      <Icon
        width="15px"
        height="15px"
        viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
        paths={[
          {
            d: "M7.5 0L13.9952 11.25L1.00481 11.25L7.5 0Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="64.29%"
        bottom="0%"
        left="58.85%"
        right="34.98%"
        transformOrigin="top left"
        transform="rotate(-180deg)"
        {...getOverrideProps(overrides, "Polygon 1")}
      ></Icon>
      <View
        width="1px"
        height="38px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="9.52%"
        left="47.74%"
        right="51.85%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 343")}
      ></View>
    </View>
  );
}
