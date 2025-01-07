/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Selectedcandidates(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="191px"
      height="103px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Selectedcandidates")}
      {...rest}
    >
      <View
        width="191px"
        height="103px"
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 15")}
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
        width="226px"
        height="48px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-11.65%"
        bottom="65.05%"
        left="-7.33%"
        right="-10.99%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="内定者"
        {...getOverrideProps(overrides, "\u5185\u5B9A\u8005")}
      ></Text>
    </View>
  );
}
