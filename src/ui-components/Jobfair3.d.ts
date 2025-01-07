/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component42Props } from "./Component42";
import { Flag2Props } from "./Flag2";
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
export declare type Jobfair3OverridesProps = {
    Jobfair3?: PrimitiveOverrideProps<ViewProps>;
    "Component 63"?: Component42Props;
    flag2?: Flag2Props;
} & EscapeHatchProps;
export declare type Jobfair3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Jobfair3OverridesProps | undefined | null;
}>;
export default function Jobfair3(props: Jobfair3Props): React.ReactElement;
