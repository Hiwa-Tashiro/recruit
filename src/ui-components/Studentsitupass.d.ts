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
export declare type StudentsitupassOverridesProps = {
    Studentsitupass?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 305"?: PrimitiveOverrideProps<ViewProps>;
    "\u5408\u683C"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StudentsitupassProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StudentsitupassOverridesProps | undefined | null;
}>;
export default function Studentsitupass(props: StudentsitupassProps): React.ReactElement;
