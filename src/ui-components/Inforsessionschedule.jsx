/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Inforsessionschedule(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="252px"
      height="76px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="3px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Inforsessionschedule")}
      {...rest}
    >
      <Icon
        width="245px"
        height="66px"
        viewBox={{ minX: 0, minY: 0, width: 245, height: 66 }}
        paths={[
          {
            d: "M0 3C0 1.34315 1.34315 0 3 0L242 0C243.657 0 245 1.34315 245 3L245 63C245 64.6569 243.657 66 242 66L3 66C1.34314 66 0 64.6569 0 63L0 3Z",
            fill: "rgba(207,241,246,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5.26%"
        bottom="7.89%"
        left="1.19%"
        right="1.59%"
        {...getOverrideProps(overrides, "Rectangle 41")}
      ></Icon>
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
        width="245px"
        height="66px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-21.05%"
        bottom="34.21%"
        left="19.84%"
        right="-17.06%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="説明会日程"
        {...getOverrideProps(overrides, "\u8AAC\u660E\u4F1A\u65E5\u7A0B")}
      ></Text>
    </View>
  );
}
