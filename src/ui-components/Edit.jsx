/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Edit(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="157px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Edit")}
      {...rest}
    >
      <View
        width="157px"
        height="40px"
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
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(203,228,255,1)"
        {...getOverrideProps(overrides, "Rectangle 318")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="77px"
        height="26px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2.5%"
        bottom="32.5%"
        left="24.84%"
        right="26.11%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="編集"
        {...getOverrideProps(overrides, "\u7DE8\u96C6")}
      ></Text>
    </View>
  );
}
