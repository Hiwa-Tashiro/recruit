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
export declare type DeleteOverridesProps = {
    Delete?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 203"?: PrimitiveOverrideProps<ViewProps>;
    "\u524A\u9664"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DeleteProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DeleteOverridesProps | undefined | null;
}>;
export default function Delete(props: DeleteProps): React.ReactElement;
