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
export declare type StudentlistOverridesProps = {
    Studentlist?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 231"?: PrimitiveOverrideProps<ViewProps>;
    "\u9078\u629E"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
    "\u6C0F\u540D"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    "\u30D5\u30EA\u30AC\u30CA"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 259"?: PrimitiveOverrideProps<ViewProps>;
    "\u5927\u5B66\u540D"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 269"?: PrimitiveOverrideProps<ViewProps>;
    "\u8AAC\u660E\u4F1A\u65E5\u6642"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 279"?: PrimitiveOverrideProps<ViewProps>;
    "\u4E00\u6B21\u9762\u63A5\u65E5\u6642"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 289"?: PrimitiveOverrideProps<ViewProps>;
    "\u5EA7\u8AC7\u4F1A\u65E5\u6642"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 304"?: PrimitiveOverrideProps<ViewProps>;
    "\u5F79\u54E1\u9762\u63A5\u65E5\u6642"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "\u5F53\u793E\u3092\u77E5\u3063\u305F\u304D\u3063\u304B\u3051"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 299"?: PrimitiveOverrideProps<ViewProps>;
    "\u5B66\u751F\u72B6\u6CC1"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "\u5B66\u751F\u4E00\u89A7"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StudentlistProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StudentlistOverridesProps | undefined | null;
}>;
export default function Studentlist(props: StudentlistProps): React.ReactElement;
