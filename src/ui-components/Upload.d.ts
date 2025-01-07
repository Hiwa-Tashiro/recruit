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
export declare type UploadOverridesProps = {
    Upload?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 259"?: PrimitiveOverrideProps<ViewProps>;
    "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UploadProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UploadOverridesProps | undefined | null;
}>;
export default function Upload(props: UploadProps): React.ReactElement;
