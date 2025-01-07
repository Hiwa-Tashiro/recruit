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
export declare type I4OverridesProps = {
    I4?: PrimitiveOverrideProps<ViewProps>;
    "Component 93"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
    "\u4E00\u6B21\u9762\u63A5"?: PrimitiveOverrideProps<TextProps>;
    flag3?: PrimitiveOverrideProps<ViewProps>;
    "Polygon 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 9"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 274"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type I4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: I4OverridesProps | undefined | null;
}>;
export default function I4(props: I4Props): React.ReactElement;
