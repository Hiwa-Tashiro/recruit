/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Flag3 from "./Flag3";
import { Text, View } from "@aws-amplify/ui-react";
export default function R4(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="152px"
      height="122px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "R4")}
      {...rest}
    >
      <Flag3
        width="32px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="59.84%"
        left="44.74%"
        right="34.21%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "flag3")}
      ></Flag3>
      <View
        width="152px"
        height="61px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="50%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "jobfair2")}
      >
        <View
          width="112px"
          height="61px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="13.16%"
          right="13.16%"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="3px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(207,241,246,1)"
          {...getOverrideProps(overrides, "Rectangle 273")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,16,102,1)"
          lineHeight="24.204544067382812px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="152px"
          height="16px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="24.59%"
          bottom="49.18%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="履歴書"
          {...getOverrideProps(overrides, "\u8AAC\u660E\u4F1A\u51FA\u5E2D")}
        ></Text>
      </View>
    </View>
  );
}
