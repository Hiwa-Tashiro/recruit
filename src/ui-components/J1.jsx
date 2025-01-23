/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Component72 from "./Component72";
import Jobfair1 from "./Jobfair1";
import Flag1 from "./Flag1";
import { View } from "@aws-amplify/ui-react";
export default function J1(props) {
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
      {...getOverrideProps(overrides, "J1")}
      {...rest}
    >
      <Component72
        width="33.08px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="59.84%"
        left="38.82%"
        right="39.42%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 73")}
      ></Component72>
      <Jobfair1
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
        {...getOverrideProps(overrides, "jobfair1")}
      ></Jobfair1>
      <Flag1
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="29.51%"
        bottom="58.2%"
        left="40.79%"
        right="49.34%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "flag1")}
      ></Flag1>
    </View>
  );
}
