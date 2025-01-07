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
export declare type R3OverridesProps = {
    R3?: PrimitiveOverrideProps<ViewProps>;
    flag2?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 8"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 27317242298"?: PrimitiveOverrideProps<ViewProps>;
    jobfair2?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27317242300"?: PrimitiveOverrideProps<ViewProps>;
    "\u8AAC\u660E\u4F1A\u51FA\u5E2D"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type R3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: R3OverridesProps | undefined | null;
}>;
export default function R3(props: R3Props): React.ReactElement;
