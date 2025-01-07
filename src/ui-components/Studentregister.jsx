/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Studentregister(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="144px"
      height="42px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Studentregister")}
      {...rest}
    >
      <Icon
        width="136px"
        height="38px"
        viewBox={{ minX: 0, minY: 0, width: 136, height: 38 }}
        paths={[
          {
            d: "M0 3C0 1.34315 1.34315 0 3 0L133 0C134.657 0 136 1.34315 136 3L136 35C136 36.6569 134.657 38 133 38L3 38C1.34315 38 0 36.6569 0 35L0 3Z",
            fill: "rgba(207,241,246,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.38%"
        bottom="7.14%"
        left="2.78%"
        right="2.78%"
        {...getOverrideProps(overrides, "Rectangle 9")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="136px"
        height="38px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-35.71%"
        bottom="45.24%"
        left="16.67%"
        right="-11.11%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="学生登録"
        {...getOverrideProps(overrides, "\u5B66\u751F\u767B\u9332")}
      ></Text>
    </View>
  );
}
