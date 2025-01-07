/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Flag3Props } from "./Flag3";
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
export declare type R5OverridesProps = {
    R5?: PrimitiveOverrideProps<ViewProps>;
    jobfair1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
    "\u8AAC\u660E\u4F1A\u51FA\u5E2D"?: PrimitiveOverrideProps<TextProps>;
    flag3?: Flag3Props;
} & EscapeHatchProps;
export declare type R5Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: R5OverridesProps | undefined | null;
}>;
export default function R5(props: R5Props): React.ReactElement;
