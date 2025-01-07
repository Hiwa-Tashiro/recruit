/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Component72 from "./Component72";
import Component95 from "./Component95";
import { View } from "@aws-amplify/ui-react";
export default function Yaku(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="152px"
      height="122px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Yaku")}
      {...rest}
    >
      <Component72
        width="34px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="59.84%"
        left="41.45%"
        right="36.18%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "Component 72/\u30C7\u30D5\u30A9\u30EB\u30C8"
        )}
      ></Component72>
      <Component95
        width="152px"
        height="61px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="50%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 95")}
      ></Component95>
    </View>
  );
}
