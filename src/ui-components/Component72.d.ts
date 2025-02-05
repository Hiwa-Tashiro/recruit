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
export declare type Component72OverridesProps = {
    Component72?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 331"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 11"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component72Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component72OverridesProps | undefined | null;
}>;
export default function Component72(props: Component72Props): React.ReactElement;
