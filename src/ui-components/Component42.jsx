/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component42(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="152px"
      height="61px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component42")}
      {...rest}
    >
      <View
        width="105px"
        height="61px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="17.11%"
        right="13.82%"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(207,241,246,1)"
        {...getOverrideProps(overrides, "Rectangle 273")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="152px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="36.07%"
        bottom="37.7%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="説明会出席"
        {...getOverrideProps(overrides, "\u8AAC\u660E\u4F1A\u51FA\u5E2D")}
      ></Text>
    </View>
  );
}
