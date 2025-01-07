/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Component45 from "./Component45";
import Flag3 from "./Flag3";
import { View } from "@aws-amplify/ui-react";
export default function Component62(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="153px"
      height="104px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component62")}
      {...rest}
    >
      <Component45
        width="153px"
        height="61px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="41.35%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 61")}
      ></Component45>
      <Flag3
        width="32px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="52.88%"
        left="44.44%"
        right="34.64%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "flag3")}
      ></Flag3>
    </View>
  );
}
