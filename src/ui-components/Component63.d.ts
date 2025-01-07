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
export declare type Component63OverridesProps = {
    Component63?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
    "\u8AAC\u660E\u4F1A\u51FA\u5E2D"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component63Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component63OverridesProps | undefined | null;
}>;
export default function Component63(props: Component63Props): React.ReactElement;