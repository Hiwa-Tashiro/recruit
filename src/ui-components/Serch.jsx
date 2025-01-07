/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Serch(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="714px"
      height="54px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Serch")}
      {...rest}
    >
      <View
        width="714px"
        height="54px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="45px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(236,230,240,1)"
        {...getOverrideProps(overrides, "Rectangle 331")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.35px"
        width="463px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-1.85%"
        bottom="55.56%"
        left="5.04%"
        right="30.11%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="参加者名/大学名/メール/当社を知ったきっかけの応募者情報&#xA;"
        {...getOverrideProps(
          overrides,
          "\u53C2\u52A0\u8005\u540D/\u5927\u5B66\u540D/\u30E1\u30FC\u30EB/\u5F53\u793E\u3092\u77E5\u3063\u305F\u304D\u3063\u304B\u3051\u306E\u5FDC\u52DF\u8005\u60C5\u5831"
        )}
      ></Text>
    </View>
  );
}
