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
export declare type FuriganaOverridesProps = {
    Furigana?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 189"?: PrimitiveOverrideProps<ViewProps>;
    "\u30D5\u30EA\u30AC\u30CA(\uFF0A)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FuriganaProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FuriganaOverridesProps | undefined | null;
}>;
export default function Furigana(props: FuriganaProps): React.ReactElement;
