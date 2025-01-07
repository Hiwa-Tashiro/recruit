/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Flag3Props } from "./Flag3";
import { R3Props } from "./R3";
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
export declare type Component84OverridesProps = {
    Component84?: PrimitiveOverrideProps<ViewProps>;
    flag3?: Flag3Props;
    r3?: R3Props;
} & EscapeHatchProps;
export declare type Component84Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component84OverridesProps | undefined | null;
}>;
export default function Component84(props: Component84Props): React.ReactElement;
