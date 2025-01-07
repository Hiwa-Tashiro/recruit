/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Flag3Props } from "./Flag3";
import { Component88Props } from "./Component88";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type Z4OverridesProps = {
    Z4?: PrimitiveOverrideProps<ViewProps>;
    flag3?: Flag3Props;
    "Component 88"?: Component88Props;
} & EscapeHatchProps;
export declare type Z4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Z4OverridesProps | undefined | null;
}>;
export default function Z4(props: Z4Props): React.ReactElement;
