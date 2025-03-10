/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
import { Component72Props } from "./Component72";
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
export declare type JobfairOverridesProps = {
    Jobfair?: PrimitiveOverrideProps<ViewProps>;
    jobfair?: PrimitiveOverrideProps<ViewProps>;
    "Component 72"?: Component72Props;
} & EscapeHatchProps;
export declare type JobfairProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: JobfairOverridesProps | undefined | null;
}>;
export default function Jobfair(props: JobfairProps): React.ReactElement;
