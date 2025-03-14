/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Post(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="562px"
      height="56px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Post")}
      {...rest}
    >
      <View
        width="420px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="25.27%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 194")}
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
        width="157px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="35.71%"
        bottom="35.71%"
        left="0%"
        right="72.06%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="郵便番号〒"
        {...getOverrideProps(overrides, "\u90F5\u4FBF\u756A\u53F7\u3012")}
      ></Text>
    </View>
  );
}
