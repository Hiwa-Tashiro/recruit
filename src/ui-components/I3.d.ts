/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Flag2Props } from "./Flag2";
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
export declare type I3OverridesProps = {
    I3?: PrimitiveOverrideProps<ViewProps>;
    flag2?: Flag2Props;
    "Component 93"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
    "\u4E00\u6B21\u9762\u63A5"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type I3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: I3OverridesProps | undefined | null;
}>;
export default function I3(props: I3Props): React.ReactElement;
