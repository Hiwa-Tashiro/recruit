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
export declare type Zadan1OverridesProps = {
    Zadan1?: PrimitiveOverrideProps<ViewProps>;
    jobfair?: PrimitiveOverrideProps<ViewProps>;
    "Component 72/\u30C7\u30D5\u30A9\u30EB\u30C8"?: Component72Props;
} & EscapeHatchProps;
export declare type Zadan1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Zadan1OverridesProps | undefined | null;
}>;
export default function Zadan1(props: Zadan1Props): React.ReactElement;
