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
export declare type RegisterOverridesProps = {
    Register?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 247"?: PrimitiveOverrideProps<ViewProps>;
    "\u767B\u9332"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RegisterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RegisterOverridesProps | undefined | null;
}>;
export default function Register(props: RegisterProps): React.ReactElement;
