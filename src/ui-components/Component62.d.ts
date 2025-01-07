/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component45Props } from "./Component45";
import { Flag3Props } from "./Flag3";
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
export declare type Component62OverridesProps = {
    Component62?: PrimitiveOverrideProps<ViewProps>;
    "Component 61"?: Component45Props;
    flag3?: Flag3Props;
} & EscapeHatchProps;
export declare type Component62Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component62OverridesProps | undefined | null;
}>;
export default function Component62(props: Component62Props): React.ReactElement;
