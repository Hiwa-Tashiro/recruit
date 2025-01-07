/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Progress4OverridesProps = {
    Progress4?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 246"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 44"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 271"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 45"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 269"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 46"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47"?: PrimitiveOverrideProps<ViewProps>;
    "\u4E00\u6B21\u9762\u63A5"?: PrimitiveOverrideProps<TextProps>;
    "\u5EA7\u8AC7\u4F1A"?: PrimitiveOverrideProps<TextProps>;
    "\u5F79\u54E1\u9762\u63A5"?: PrimitiveOverrideProps<TextProps>;
    "\u8A93\u7D04\u66F8\u53D7\u9818"?: PrimitiveOverrideProps<TextProps>;
    "\u8AAC\u660E\u4F1A\u51FA\u5E2D"?: PrimitiveOverrideProps<TextProps>;
    "\u5C65\u6B74\u66F8\u63D0\u51FA"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 182"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 208"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 272"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 274"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 5"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 6"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 4"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 5"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 6"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Progress4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Progress4OverridesProps | undefined | null;
}>;
export default function Progress4(props: Progress4Props): React.ReactElement;
