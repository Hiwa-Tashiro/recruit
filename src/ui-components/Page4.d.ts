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
export declare type Page4OverridesProps = {
    "4"?: PrimitiveOverrideProps<TextProps>;
    Page4?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 11"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Page4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Page4OverridesProps | undefined | null;
}>;
export default function Page4(props: Page4Props): React.ReactElement;
