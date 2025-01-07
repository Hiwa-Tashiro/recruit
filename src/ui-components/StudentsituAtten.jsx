/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function StudentsituAtten(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="52px"
      height="51px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "StudentsituAtten")}
      {...rest}
    >
      <View
        width="52px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(140,200,255,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,243,243,1)"
        {...getOverrideProps(overrides, "Rectangle 305")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="34px"
        height="26px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="39.22%"
        bottom="9.8%"
        left="17.31%"
        right="17.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="出席"
        {...getOverrideProps(overrides, "\u51FA\u5E2D")}
      ></Text>
    </View>
  );
}
