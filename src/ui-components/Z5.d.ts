/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Flag3Props } from "./Flag3";
import { Component89Props } from "./Component89";
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
export declare type Z5OverridesProps = {
    Z5?: PrimitiveOverrideProps<ViewProps>;
    flag3?: Flag3Props;
    "Component 89"?: Component89Props;
} & EscapeHatchProps;
export declare type Z5Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Z5OverridesProps | undefined | null;
}>;
export default function Z5(props: Z5Props): React.ReactElement;
