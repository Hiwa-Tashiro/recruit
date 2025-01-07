/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
import { Flag3Props } from "./Flag3";
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
export declare type Jobfair4OverridesProps = {
    Jobfair4?: PrimitiveOverrideProps<ViewProps>;
    jobfair?: PrimitiveOverrideProps<ViewProps>;
    flag3?: Flag3Props;
} & EscapeHatchProps;
export declare type Jobfair4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Jobfair4OverridesProps | undefined | null;
}>;
export default function Jobfair4(props: Jobfair4Props): React.ReactElement;
