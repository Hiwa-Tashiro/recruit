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
export declare type Page3blueOverridesProps = {
    "3"?: PrimitiveOverrideProps<TextProps>;
    Page3blue?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 7"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Page3blueProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Page3blueOverridesProps | undefined | null;
}>;
export default function Page3blue(props: Page3blueProps): React.ReactElement;
