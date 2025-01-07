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
export declare type DataselectOverridesProps = {
    "10"?: PrimitiveOverrideProps<TextProps>;
    Dataselect?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 280"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 178"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 179"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 180"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 181"?: PrimitiveOverrideProps<ViewProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    "Line 7"?: PrimitiveOverrideProps<IconProps>;
    "Line 8"?: PrimitiveOverrideProps<IconProps>;
    "Line 9"?: PrimitiveOverrideProps<IconProps>;
    "Line 10"?: PrimitiveOverrideProps<IconProps>;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 2"?: PrimitiveOverrideProps<IconProps>;
    arrow_drop_up?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type DataselectProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DataselectOverridesProps | undefined | null;
}>;
export default function Dataselect(props: DataselectProps): React.ReactElement;
