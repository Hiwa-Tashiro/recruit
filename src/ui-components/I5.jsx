/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Flag3 from "./Flag3";
import Component85 from "./Component85";
import { View } from "@aws-amplify/ui-react";
export default function I5(props) {
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
      {...getOverrideProps(overrides, "I5")}
      {...rest}
    >
      <Flag3
        width="32px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="59.84%"
        left="39.47%"
        right="39.47%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "flag3")}
      ></Flag3>
      <Component85
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
        {...getOverrideProps(overrides, "Component 85")}
      ></Component85>
    </View>
  );
}
