/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NendoOverridesProps = {
    Nendo?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 244"?: PrimitiveOverrideProps<ViewProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 343"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type NendoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NendoOverridesProps | undefined | null;
}>;
export default function Nendo(props: NendoProps): React.ReactElement;
