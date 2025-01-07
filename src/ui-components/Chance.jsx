/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Chance(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="382px"
      height="90px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Chance")}
      {...rest}
    >
      <View
        width="273px"
        height="65px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="27.78%"
        bottom="0%"
        left="28.53%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 306")}
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
        width="239px"
        height="14px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="84.44%"
        left="0%"
        right="37.43%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="当社を知ったきっかけ(＊)"
        {...getOverrideProps(
          overrides,
          "\u5F53\u793E\u3092\u77E5\u3063\u305F\u304D\u3063\u304B\u3051(\uFF0A)"
        )}
      ></Text>
    </View>
  );
}
