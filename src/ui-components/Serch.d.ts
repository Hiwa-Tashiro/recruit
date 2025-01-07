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
export declare type SerchOverridesProps = {
    Serch?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 331"?: PrimitiveOverrideProps<ViewProps>;
    "\u53C2\u52A0\u8005\u540D/\u5927\u5B66\u540D/\u30E1\u30FC\u30EB/\u5F53\u793E\u3092\u77E5\u3063\u305F\u304D\u3063\u304B\u3051\u306E\u5FDC\u52DF\u8005\u60C5\u5831"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SerchProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SerchOverridesProps | undefined | null;
}>;
export default function Serch(props: SerchProps): React.ReactElement;
