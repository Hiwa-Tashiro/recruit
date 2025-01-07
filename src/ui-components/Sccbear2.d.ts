/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Sccbear2OverridesProps = {
    Sccbear2?: PrimitiveOverrideProps<ViewProps>;
    "\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2024-11-14 10.37.39 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Sccbear2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Sccbear2OverridesProps | undefined | null;
}>;
export default function Sccbear2(props: Sccbear2Props): React.ReactElement;
