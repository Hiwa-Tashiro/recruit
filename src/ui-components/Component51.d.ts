/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Component51OverridesProps = {
    Component51?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 278"?: PrimitiveOverrideProps<ViewProps>;
    "\u5F79\u54E1\u9762\u63A5"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component51Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component51OverridesProps | undefined | null;
}>;
export default function Component51(props: Component51Props): React.ReactElement;
