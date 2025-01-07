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
export declare type Inforsessionschedule2OverridesProps = {
    Inforsessionschedule2?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 178"?: PrimitiveOverrideProps<ViewProps>;
    "\u8AAC\u660E\u4F1A\u65E5\u7A0B"?: PrimitiveOverrideProps<TextProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 343"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Inforsessionschedule2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Inforsessionschedule2OverridesProps | undefined | null;
}>;
export default function Inforsessionschedule2(props: Inforsessionschedule2Props): React.ReactElement;
