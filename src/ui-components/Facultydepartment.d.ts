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
export declare type FacultydepartmentOverridesProps = {
    Facultydepartment?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 201"?: PrimitiveOverrideProps<ViewProps>;
    "\u5B66\u90E8\u30FB\u5B66\u79D1(\uFF0A)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FacultydepartmentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FacultydepartmentOverridesProps | undefined | null;
}>;
export default function Facultydepartment(props: FacultydepartmentProps): React.ReactElement;
