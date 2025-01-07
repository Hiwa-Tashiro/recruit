/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Component72 from "./Component72";
import Component89 from "./Component89";
import { View } from "@aws-amplify/ui-react";
export default function Z1(props) {
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
      {...getOverrideProps(overrides, "Z1")}
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
        left="38.82%"
        right="38.82%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "Component 72/\u30C7\u30D5\u30A9\u30EB\u30C8"
        )}
      ></Component72>
      <Component89
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
        {...getOverrideProps(overrides, "Component 89")}
      ></Component89>
    </View>
  );
}
