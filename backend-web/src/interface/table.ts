import { ReactNode } from "react";



export interface TableProp {
    columns: Array<ColumnsProp>,
    data?: any
};


export interface ColumnsProp {
    name: string,
    label: string,
    // align : string
};

