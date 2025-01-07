/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Flag2Props } from "./Flag2";
import { Jobfair2Props } from "./Jobfair2";
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
export declare type J3OverridesProps = {
    J3?: PrimitiveOverrideProps<ViewProps>;
    flag2?: Flag2Props;
    jobfair2?: Jobfair2Props;
} & EscapeHatchProps;
export declare type J3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: J3OverridesProps | undefined | null;
}>;
export default function J3(props: J3Props): React.ReactElement;
