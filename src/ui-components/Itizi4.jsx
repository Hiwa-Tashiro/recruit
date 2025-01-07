/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
import Flag3 from "./Flag3";
export default function Itizi4(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="150px"
      height="122px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Itizi4")}
      {...rest}
    >
      <View
        width="150px"
        height="122px"
        {...getOverrideProps(overrides, "jobfair")}
      ></View>
      <Flag3
        width="31.58px"
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
    </View>
  );
}
