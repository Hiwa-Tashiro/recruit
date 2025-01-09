/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Return(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="147px"
      height="50px"
      display="flex"
      gap="unset"
      alignItems="center"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Return")}
      {...rest}
    >
      <View
        width="147px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 173")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"

        gap="unset"
        alignItems="unset"
        position="absolute"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="戻る"
        {...getOverrideProps(overrides, "\u623B\u308B10411257")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="戻る"
        {...getOverrideProps(overrides, "\u623B\u308B10401526")}
      ></Text>
    </View>
  );
}
