/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type StudentlistgrayOverridesProps = {
    Studentlistgray?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 235"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 25"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 26"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 263"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 273"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 326"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 293"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 307"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 303"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type StudentlistgrayProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StudentlistgrayOverridesProps | undefined | null;
}>;
export default function Studentlistgray(props: StudentlistgrayProps): React.ReactElement;
