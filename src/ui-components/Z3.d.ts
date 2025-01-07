/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Flag2Props } from "./Flag2";
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
export declare type Z3OverridesProps = {
    Z3?: PrimitiveOverrideProps<ViewProps>;
    flag2?: Flag2Props;
    "Component 88"?: Component88Props;
} & EscapeHatchProps;
export declare type Z3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Z3OverridesProps | undefined | null;
}>;
export default function Z3(props: Z3Props): React.ReactElement;
