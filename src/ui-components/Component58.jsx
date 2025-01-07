/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Component43 from "./Component43";
import Flag3 from "./Flag3";
import { View } from "@aws-amplify/ui-react";
export default function Component58(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="112px"
      height="104px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component58")}
      {...rest}
    >
      <Component43
        width="112px"
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
        {...getOverrideProps(overrides, "Component 57")}
      ></Component43>
      <Flag3
        width="32px"
        height="44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="57.69%"
        left="44.64%"
        right="26.79%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "flag3")}
      ></Flag3>
    </View>
  );
}
