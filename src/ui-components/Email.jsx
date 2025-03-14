/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Email(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="646px"
      height="80px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Email")}
      {...rest}
    >
      <View
        width="549px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="20%"
        bottom="0%"
        left="15.02%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 307")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="114px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="70%"
        left="0%"
        right="82.35%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="E-mail(＊)"
        {...getOverrideProps(overrides, "E-mail(\uFF0A)")}
      ></Text>
    </View>
  );
}
