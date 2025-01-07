/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
import Flag2 from "./Flag2";
export default function Itizi2(props) {
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
      {...getOverrideProps(overrides, "Itizi2")}
      {...rest}
    >
      <View
        width="150px"
        height="122px"
        {...getOverrideProps(overrides, "jobfair")}
      ></View>
      <Flag2
        width="14.8px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="59.84%"
        left="44.74%"
        right="45.39%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "flag2")}
      ></Flag2>
    </View>
  );
}
