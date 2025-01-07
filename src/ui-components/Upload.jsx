/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Upload(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="137px"
      height="34px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Upload")}
      {...rest}
    >
      <View
        width="134px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="2.19%"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(235,235,235,1)"
        {...getOverrideProps(overrides, "Rectangle 259")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="128px"
        height="20px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-32.35%"
        bottom="73.53%"
        left="6.57%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="アップロード"
        {...getOverrideProps(overrides, "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9")}
      ></Text>
    </View>
  );
}
