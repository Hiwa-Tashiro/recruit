/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Address(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="827px"
      height="107px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Address")}
      {...rest}
    >
      <View
        width="728px"
        height="107px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="11.97%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 195")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="63px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="43.93%"
        bottom="42.06%"
        left="0%"
        right="92.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="住所"
        {...getOverrideProps(overrides, "\u4F4F\u6240")}
      ></Text>
    </View>
  );
}
