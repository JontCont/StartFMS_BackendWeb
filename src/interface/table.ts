import { ReactNode } from "react";

export interface TableProp {
    columns: Array<ColumnsProp>,
    data?: any,
    actions : ActionsProp
};

export interface ActionsProp {
    isUse: boolean,
    data: Array<number>,
    editorUrl? : string
};
export interface ColumnsProp {
    name: string,
    label: string,
    hidden?: boolean,
    // align : string
};

