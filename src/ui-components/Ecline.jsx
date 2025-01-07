/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Ecline(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="216px"
      height="55px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Ecline")}
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
        width="199px"
        height="35px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30.91%"
        bottom="5.45%"
        left="0%"
        right="7.87%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="辞退"
        {...getOverrideProps(overrides, "\u8F9E\u9000")}
      ></Text>
      <View
        width="74px"
        height="55px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="65.74%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 305")}
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
        width="144px"
        height="19px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="7px"
        left="106px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="✔︎"
        {...getOverrideProps(overrides, "\u2714\uFE0E")}
      ></Text>
    </View>
  );
}
