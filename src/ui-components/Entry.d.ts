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
export declare type EntryOverridesProps = {
    Entry?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 259"?: PrimitiveOverrideProps<ViewProps>;
    "\u30A8\u30F3\u30C8\u30EA\u30FC"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EntryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EntryOverridesProps | undefined | null;
}>;
export default function Entry(props: EntryProps): React.ReactElement;
