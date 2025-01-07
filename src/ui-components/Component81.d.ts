/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component76Props } from "./Component76";
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
export declare type Component81OverridesProps = {
    Component81?: PrimitiveOverrideProps<ViewProps>;
    "Component 81"?: Component76Props;
} & EscapeHatchProps;
export declare type Component81Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component81OverridesProps | undefined | null;
}>;
export default function Component81(props: Component81Props): React.ReactElement;
