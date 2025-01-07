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
export declare type Component48OverridesProps = {
    Component48?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 279"?: PrimitiveOverrideProps<ViewProps>;
    "\u8A93\u7D04\u66F8\u53D7\u9818"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component48Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component48OverridesProps | undefined | null;
}>;
export default function Component48(props: Component48Props): React.ReactElement;
