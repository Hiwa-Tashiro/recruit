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
export declare type BirthOverridesProps = {
    Birth?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 191"?: PrimitiveOverrideProps<ViewProps>;
    "\u751F\u5E74\u6708\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "\u5E74\u3000\u3000\u3000\u6708\u3000\u3000\u65E5\u751F(\u6E80\u3000\u3000\u6B73)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BirthProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BirthOverridesProps | undefined | null;
}>;
export default function Birth(props: BirthProps): React.ReactElement;
