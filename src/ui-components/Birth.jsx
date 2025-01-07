/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Birth(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="590px"
      height="69px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Birth")}
      {...rest}
    >
      <View
        width="449px"
        height="69px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="21.86%"
        right="2.03%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 191")}
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
        width="100px"
        height="17px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="36.23%"
        bottom="39.13%"
        left="0%"
        right="83.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="生年月日"
        {...getOverrideProps(overrides, "\u751F\u5E74\u6708\u65E5")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="406px"
        height="18px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="28.99%"
        bottom="44.93%"
        left="31.19%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="年　　　月　　日生(満　　歳)"
        {...getOverrideProps(
          overrides,
          "\u5E74\u3000\u3000\u3000\u6708\u3000\u3000\u65E5\u751F(\u6E80\u3000\u3000\u6B73)"
        )}
      ></Text>
    </View>
  );
}
