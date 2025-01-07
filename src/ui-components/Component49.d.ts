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
export declare type Component49OverridesProps = {
    Component49?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 276"?: PrimitiveOverrideProps<ViewProps>;
    "\u5EA7\u8AC7\u4F1A"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component49Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component49OverridesProps | undefined | null;
}>;
export default function Component49(props: Component49Props): React.ReactElement;