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
export declare type ChanceOverridesProps = {
    Chance?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 306"?: PrimitiveOverrideProps<ViewProps>;
    "\u5F53\u793E\u3092\u77E5\u3063\u305F\u304D\u3063\u304B\u3051(\uFF0A)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ChanceProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ChanceOverridesProps | undefined | null;
}>;
export default function Chance(props: ChanceProps): React.ReactElement;
