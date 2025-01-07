/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component72Props } from "./Component72";
import { Component95Props } from "./Component95";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type YakuOverridesProps = {
    Yaku?: PrimitiveOverrideProps<ViewProps>;
    "Component 72/\u30C7\u30D5\u30A9\u30EB\u30C8"?: Component72Props;
    "Component 95"?: Component95Props;
} & EscapeHatchProps;
export declare type YakuProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: YakuOverridesProps | undefined | null;
}>;
export default function Yaku(props: YakuProps): React.ReactElement;