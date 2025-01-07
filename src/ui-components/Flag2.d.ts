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
export declare type Flag2OverridesProps = {
    Flag2?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 8"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Flag2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Flag2OverridesProps | undefined | null;
}>;
export default function Flag2(props: Flag2Props): React.ReactElement;
