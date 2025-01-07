/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component27(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 305": {},
        "Rectangle 306": {},
        "Rectangle 307": {},
        "\u5408\u683C": {},
        "\u4E0D\u5408\u683C": {},
        "\u672A\u5B9A": {},
        Component27: {},
      },
      variantValues: {
        "\u30D7\u30ED\u30D1\u30C6\u30A31": "\u30C7\u30D5\u30A9\u30EB\u30C8",
      },
    },
    {
      overrides: {
        "Rectangle 305": { backgroundColor: "rgba(184,221,255,1)" },
        "Rectangle 306": {},
        "Rectangle 307": {},
        "\u5408\u683C": { height: "27px", top: "52.94%", bottom: "15.29%" },
        "\u4E0D\u5408\u683C": {
          height: "25px",
          top: "55.29%",
          bottom: "15.29%",
        },
        "\u672A\u5B9A": { top: "52.94%", bottom: "17.65%" },
        Component27: {},
      },
      variantValues: {
        "\u30D7\u30ED\u30D1\u30C6\u30A31": "\u30D0\u30EA\u30A2\u30F3\u30C82",
      },
    },
    {
      overrides: {
        "Rectangle 305": {},
        "Rectangle 306": { backgroundColor: "rgba(184,221,255,1)" },
        "Rectangle 307": {},
        "\u5408\u683C": { height: "27px", top: "52.94%", bottom: "15.29%" },
        "\u4E0D\u5408\u683C": {
          height: "25px",
          top: "55.29%",
          bottom: "15.29%",
        },
        "\u672A\u5B9A": { top: "52.94%", bottom: "17.65%" },
        Component27: {},
      },
      variantValues: {
        "\u30D7\u30ED\u30D1\u30C6\u30A31": "\u30D0\u30EA\u30A2\u30F3\u30C83",
      },
    },
    {
      overrides: {
        "Rectangle 305": {},
        "Rectangle 306": {},
        "Rectangle 307": { backgroundColor: "rgba(184,221,255,1)" },
        "\u5408\u683C": {},
        "\u4E0D\u5408\u683C": {},
        "\u672A\u5B9A": {},
        Component27: {},
      },
      variantValues: {
        "\u30D7\u30ED\u30D1\u30C6\u30A31": "\u30D0\u30EA\u30A2\u30F3\u30C84",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="163px"
      height="85px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component27")}
      {...rest}
    >
      <View
        width="52px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="31.76%"
        bottom="8.24%"
        left="1.84%"
        right="66.26%"
        border="1px SOLID rgba(140,200,255,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 305")}
      ></View>
      <View
        width="50px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="31.76%"
        bottom="8.24%"
        left="35.58%"
        right="33.74%"
        border="1px SOLID rgba(140,200,255,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 306")}
      ></View>
      <View
        width="49px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="31.76%"
        bottom="8.24%"
        left="68.1%"
        right="1.84%"
        border="1px SOLID rgba(140,200,255,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 307")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="34px"
        height="26px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="55.29%"
        bottom="14.12%"
        left="7.36%"
        right="71.78%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="合格"
        {...getOverrideProps(overrides, "\u5408\u683C")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="36px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="57.65%"
        bottom="14.12%"
        left="39.88%"
        right="38.04%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="不合格"
        {...getOverrideProps(overrides, "\u4E0D\u5408\u683C")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="23px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="55.29%"
        bottom="15.29%"
        left="76.07%"
        right="9.82%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="未定"
        {...getOverrideProps(overrides, "\u672A\u5B9A")}
      ></Text>
    </View>
  );
}
