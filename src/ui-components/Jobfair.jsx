/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
import Component72 from "./Component72";
export default function Jobfair(props) {
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
      {...getOverrideProps(overrides, "Jobfair")}
      {...rest}
    >
      <View
        width="152px"
        height="122px"
        {...getOverrideProps(overrides, "jobfair")}
      ></View>
      <Component72
        width="33.52px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="59.84%"
        left="38.82%"
        right="39.13%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 72")}
      ></Component72>
    </View>
  );
}
