/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component49Props } from "./Component49";
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
export declare type Component60OverridesProps = {
    Component60?: PrimitiveOverrideProps<ViewProps>;
    "Component 59"?: Component49Props;
    flag3?: Flag3Props;
} & EscapeHatchProps;
export declare type Component60Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component60OverridesProps | undefined | null;
}>;
export default function Component60(props: Component60Props): React.ReactElement;
