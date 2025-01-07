/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Flag3Props } from "./Flag3";
import { Jobfair1Props } from "./Jobfair1";
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
export declare type J5OverridesProps = {
    J5?: PrimitiveOverrideProps<ViewProps>;
    flag3?: Flag3Props;
    jobfair1?: Jobfair1Props;
} & EscapeHatchProps;
export declare type J5Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: J5OverridesProps | undefined | null;
}>;
export default function J5(props: J5Props): React.ReactElement;
