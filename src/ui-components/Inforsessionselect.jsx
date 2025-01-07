/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Inforsessionselect(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="180px"
      height="104px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Inforsessionselect")}
      {...rest}
    >
      <View
        width="180px"
        height="104px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(233,233,233,1)"
        {...getOverrideProps(overrides, "Rectangle 41")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="174px"
        height="48px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-11.54%"
        bottom="65.38%"
        left="0.56%"
        right="2.78%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="説明会"
        {...getOverrideProps(overrides, "\u8AAC\u660E\u4F1A")}
      ></Text>
    </View>
  );
}
