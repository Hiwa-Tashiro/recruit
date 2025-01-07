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
export declare type EclineOverridesProps = {
    Ecline?: PrimitiveOverrideProps<ViewProps>;
    "\u8F9E\u9000"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 305"?: PrimitiveOverrideProps<ViewProps>;
    "\u2714\uFE0E"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EclineProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EclineOverridesProps | undefined | null;
}>;
export default function Ecline(props: EclineProps): React.ReactElement;
