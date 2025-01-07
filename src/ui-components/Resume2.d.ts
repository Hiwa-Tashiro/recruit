/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
import { Flag2Props } from "./Flag2";
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
export declare type Resume2OverridesProps = {
    Resume2?: PrimitiveOverrideProps<ViewProps>;
    jobfair?: PrimitiveOverrideProps<ViewProps>;
    flag2?: Flag2Props;
} & EscapeHatchProps;
export declare type Resume2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Resume2OverridesProps | undefined | null;
}>;
export default function Resume2(props: Resume2Props): React.ReactElement;
