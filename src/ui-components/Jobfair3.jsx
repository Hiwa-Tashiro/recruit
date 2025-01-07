/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Component42 from "./Component42";
import Flag2 from "./Flag2";
import { View } from "@aws-amplify/ui-react";
export default function Jobfair3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="152px"
      height="129px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Jobfair3")}
      {...rest}
    >
      <Component42
        width="152px"
        height="61.48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="52.34%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 63")}
      ></Component42>
      <Flag2
        width="15px"
        height="47.37px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="63.28%"
        left="46.71%"
        right="43.42%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "flag2")}
      ></Flag2>
    </View>
  );
}
