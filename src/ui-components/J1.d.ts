/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component72Props } from "./Component72";
import { Jobfair1Props } from "./Jobfair1";
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
export declare type J1OverridesProps = {
    J1?: PrimitiveOverrideProps<ViewProps>;
    "Component 73"?: Component72Props;
    jobfair1?: Jobfair1Props;
} & EscapeHatchProps;
export declare type J1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: J1OverridesProps | undefined | null;
}>;
export default function J1(props: J1Props): React.ReactElement;
