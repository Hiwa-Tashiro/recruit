/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Register(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="167px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Register")}
      {...rest}
    >
      <View
        width="167px"
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
        backgroundColor="rgba(207,241,246,1)"
        {...getOverrideProps(overrides, "Rectangle 247")}
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
        width="129px"
        height="26px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-65%"
        bottom="100%"
        left="11.38%"
        right="11.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="登録&#xA;"
        {...getOverrideProps(overrides, "\u767B\u9332")}
      ></Text>
    </View>
  );
}
