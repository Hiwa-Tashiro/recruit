/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Studentinfo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="251px"
      height="30px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Studentinfo")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="400"
        color="rgba(30,30,30,1)"
        lineHeight="58.09090805053711px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="251px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="学生情報"
        {...getOverrideProps(overrides, "\u5B66\u751F\u60C5\u5831")}
      ></Text>
    </View>
  );
}
