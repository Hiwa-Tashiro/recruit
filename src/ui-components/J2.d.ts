/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component72Props } from "./Component72";
import { Jobfair2Props } from "./Jobfair2";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type J2OverridesProps = {
    J2?: PrimitiveOverrideProps<ViewProps>;
    "Component 74"?: PrimitiveOverrideProps<ViewProps>;
    "Component 73"?: Component72Props;
    jobfair2?: Jobfair2Props;
    flag1?: Flag1Props;
} & EscapeHatchProps;
export declare type J2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: J2OverridesProps | undefined | null;
}>;
export default function J2(props: J2Props): React.ReactElement;
