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
export declare type Component29OverridesProps = {
    Component29?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 228"?: PrimitiveOverrideProps<ViewProps>;
    "\u3053\u306E\u8AAC\u660E\u4F1A\u306B\u53C2\u52A0\u3059\u308B\u5B66\u751F\u306F\u3044\u307E\u305B\u3093\u304B\uFF1F"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 252"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 253"?: PrimitiveOverrideProps<ViewProps>;
    "\u524A\u9664"?: PrimitiveOverrideProps<TextProps>;
    "\u3084\u3081\u308B"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component29Props = React.PropsWithChildren<Partial<ViewProps> & {
    プロパティ1?: "\u30C7\u30D5\u30A9\u30EB\u30C8";
} & {
    overrides?: Component29OverridesProps | undefined | null;
}>;
export default function Component29(props: Component29Props): React.ReactElement;
