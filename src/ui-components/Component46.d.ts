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
export declare type Component46OverridesProps = {
    Component46?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 274"?: PrimitiveOverrideProps<ViewProps>;
    "\u5C65\u6B74\u66F8\u63D0\u51FA"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component46Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component46OverridesProps | undefined | null;
}>;
export default function Component46(props: Component46Props): React.ReactElement;
