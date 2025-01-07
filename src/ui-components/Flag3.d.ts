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
export declare type Flag3OverridesProps = {
    Flag3?: PrimitiveOverrideProps<ViewProps>;
    "Polygon 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 9"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 274"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Flag3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Flag3OverridesProps | undefined | null;
}>;
export default function Flag3(props: Flag3Props): React.ReactElement;
