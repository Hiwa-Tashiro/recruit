/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type StudentregisterOverridesProps = {
    Studentregister?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<IconProps>;
    "\u5B66\u751F\u767B\u9332"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StudentregisterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StudentregisterOverridesProps | undefined | null;
}>;
export default function Studentregister(props: StudentregisterProps): React.ReactElement;
