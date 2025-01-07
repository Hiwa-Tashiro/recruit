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
export default function Component29(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 228": {},
        "\u3053\u306E\u8AAC\u660E\u4F1A\u306B\u53C2\u52A0\u3059\u308B\u5B66\u751F\u306F\u3044\u307E\u305B\u3093\u304B\uFF1F":
          {},
        "Rectangle 252": {},
        "Rectangle 253": {},
        "\u524A\u9664": {},
        "\u3084\u3081\u308B": {},
        Component29: {},
      },
      variantValues: {
        "\u30D7\u30ED\u30D1\u30C6\u30A31": "\u30C7\u30D5\u30A9\u30EB\u30C8",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="573px"
      height="344px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component29")}
      {...rest}
    >
      <View
        width="573px"
        height="344px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 228")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="411px"
        height="28px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="28.2%"
        bottom="63.66%"
        left="14.14%"
        right="14.14%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="この説明会に参加する学生はいませんか？"
        {...getOverrideProps(
          overrides,
          "\u3053\u306E\u8AAC\u660E\u4F1A\u306B\u53C2\u52A0\u3059\u308B\u5B66\u751F\u306F\u3044\u307E\u305B\u3093\u304B\uFF1F"
        )}
      ></Text>
      <View
        width="83.43px"
        height="36.69px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="56%"
        bottom="33.33%"
        left="23.08%"
        right="62.36%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,67,70,1)"
        {...getOverrideProps(overrides, "Rectangle 252")}
      ></View>
      <View
        width="83.43px"
        height="36.69px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="56%"
        bottom="33.33%"
        left="60.16%"
        right="25.27%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 253")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="47.23px"
        height="27.52px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="57.78%"
        bottom="34.22%"
        left="26.62%"
        right="65.14%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="削除"
        {...getOverrideProps(overrides, "\u524A\u9664")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="70.84px"
        height="27.52px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="57.78%"
        bottom="34.22%"
        left="62.14%"
        right="25.5%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="やめる"
        {...getOverrideProps(overrides, "\u3084\u3081\u308B")}
      ></Text>
    </View>
  );
}
