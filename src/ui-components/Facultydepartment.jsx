/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Facultydepartment(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="696px"
      height="69px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Facultydepartment")}
      {...rest}
    >
      <View
        width="548px"
        height="69px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="21.26%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 201")}
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
        width="156px"
        height="17px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="37.68%"
        bottom="37.68%"
        left="0%"
        right="77.59%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="学部・学科(＊)"
        {...getOverrideProps(
          overrides,
          "\u5B66\u90E8\u30FB\u5B66\u79D1(\uFF0A)"
        )}
      ></Text>
    </View>
  );
}
