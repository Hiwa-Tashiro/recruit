/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
import { Component85Props } from "./Component85";
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
export declare type I1OverridesProps = {
    I1?: PrimitiveOverrideProps<ViewProps>;
    "Component 72/\u30C7\u30D5\u30A9\u30EB\u30C8"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 331"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 11"?: PrimitiveOverrideProps<IconProps>;
    "Component 85"?: Component85Props;
} & EscapeHatchProps;
export declare type I1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: I1OverridesProps | undefined | null;
}>;
export default function I1(props: I1Props): React.ReactElement;
