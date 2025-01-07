/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Pageleft(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="50px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Pageleft")}
      {...rest}
    >
      <Icon
        width="50px"
        height="50px"
        viewBox={{ minX: 0, minY: 0, width: 50, height: 50 }}
        paths={[
          {
            d: "M49 25C49 38.2548 38.2548 49 25 49L25 51C39.3594 51 51 39.3594 51 25L49 25ZM25 49C11.7452 49 1 38.2548 1 25L-1 25C-1 39.3594 10.6406 51 25 51L25 49ZM1 25C1 11.7452 11.7452 1 25 1L25 -1C10.6406 -1 -1 10.6406 -1 25L1 25ZM25 1C38.2548 1 49 11.7452 49 25L51 25C51 10.6406 39.3594 -1 25 -1L25 1Z",
            stroke: "rgba(190,183,183,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Ellipse 9")}
      ></Icon>
      <Text
        fontFamily="Itim"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.400001525878906px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.81px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="6%"
        bottom="18%"
        left="32%"
        right="32%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="<"
        {...getOverrideProps(overrides, "<")}
      ></Text>
    </View>
  );
}
