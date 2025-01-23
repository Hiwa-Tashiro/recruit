/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Flag1Props } from "./Flag1";
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
export declare type I2OverridesProps = {
    I2?: PrimitiveOverrideProps<ViewProps>;
    "Component 72/\u30C7\u30D5\u30A9\u30EB\u30C8"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 331"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 11"?: PrimitiveOverrideProps<IconProps>;
    flag1?: Flag1Props;
    "Component 93"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
    "\u4E00\u6B21\u9762\u63A5"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type I2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: I2OverridesProps | undefined | null;
}>;
export default function I2(props: I2Props): React.ReactElement;
