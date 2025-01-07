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
export declare type Component27OverridesProps = {
    Component27?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 305"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 306"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 307"?: PrimitiveOverrideProps<ViewProps>;
    "\u5408\u683C"?: PrimitiveOverrideProps<TextProps>;
    "\u4E0D\u5408\u683C"?: PrimitiveOverrideProps<TextProps>;
    "\u672A\u5B9A"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component27Props = React.PropsWithChildren<Partial<ViewProps> & {
    プロパティ1?: "\u30C7\u30D5\u30A9\u30EB\u30C8" | "\u30D0\u30EA\u30A2\u30F3\u30C82" | "\u30D0\u30EA\u30A2\u30F3\u30C83" | "\u30D0\u30EA\u30A2\u30F3\u30C84";
} & {
    overrides?: Component27OverridesProps | undefined | null;
}>;
export default function Component27(props: Component27Props): React.ReactElement;
