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
export declare type R2OverridesProps = {
    R2?: PrimitiveOverrideProps<ViewProps>;
    jobfair2?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
    "\u8AAC\u660E\u4F1A\u51FA\u5E2D"?: PrimitiveOverrideProps<TextProps>;
    "Component 72/\u30C7\u30D5\u30A9\u30EB\u30C8"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 331"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 11"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type R2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: R2OverridesProps | undefined | null;
}>;
export default function R2(props: R2Props): React.ReactElement;
