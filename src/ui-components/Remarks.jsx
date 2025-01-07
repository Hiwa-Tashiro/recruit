/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Remarks(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="643px"
      height="124px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Remarks")}
      {...rest}
    >
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
        width="94px"
        height="17px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="40.32%"
        bottom="45.97%"
        left="0%"
        right="85.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="備考"
        {...getOverrideProps(overrides, "\u5099\u8003")}
      ></Text>
      <View
        width="551px"
        height="124px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="14.31%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 308")}
      ></View>
    </View>
  );
}
