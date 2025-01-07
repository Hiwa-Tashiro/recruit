/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component43Props } from "./Component43";
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
export declare type Component58OverridesProps = {
    Component58?: PrimitiveOverrideProps<ViewProps>;
    "Component 57"?: Component43Props;
    flag3?: Flag3Props;
} & EscapeHatchProps;
export declare type Component58Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component58OverridesProps | undefined | null;
}>;
export default function Component58(props: Component58Props): React.ReactElement;
