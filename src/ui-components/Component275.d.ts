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
export declare type Component275OverridesProps = {
    Component275?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 305"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 306"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 307"?: PrimitiveOverrideProps<ViewProps>;
    "\u51FA\u5E2D"?: PrimitiveOverrideProps<TextProps>;
    "\u6B20\u5E2D"?: PrimitiveOverrideProps<TextProps>;
    "\u30AD\u30E3\u30F3\u30BB\u30EB"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component275Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component275OverridesProps | undefined | null;
}>;
export default function Component275(props: Component275Props): React.ReactElement;
