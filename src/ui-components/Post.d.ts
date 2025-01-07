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
export declare type PostOverridesProps = {
    Post?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 194"?: PrimitiveOverrideProps<ViewProps>;
    "\u90F5\u4FBF\u756A\u53F7\u3012"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PostProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PostOverridesProps | undefined | null;
}>;
export default function Post(props: PostProps): React.ReactElement;
