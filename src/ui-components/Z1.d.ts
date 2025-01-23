/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component72Props } from "./Component72";
import { Component89Props } from "./Component89";
import { Flag1Props } from "./Flag1";
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
export declare type Z1OverridesProps = {
    Z1?: PrimitiveOverrideProps<ViewProps>;
    "Component 72/\u30C7\u30D5\u30A9\u30EB\u30C8"?: Component72Props;
    "Component 89"?: Component89Props;
    flag1?: Flag1Props;
} & EscapeHatchProps;
export declare type Z1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Z1OverridesProps | undefined | null;
}>;
export default function Z1(props: Z1Props): React.ReactElement;
