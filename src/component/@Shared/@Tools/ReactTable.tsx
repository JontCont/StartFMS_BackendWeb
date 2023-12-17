import React from "react";
import { ColumnsProp } from "../../../models/Layout/ColumnsProp";
import { ActionsProp } from "../../../models/Layout/ActionsProp";
import {
    createColumnHelper, // 幫忙製作表格列的工具
    flexRender, // 其實就是 flex box
    getCoreRowModel, // 取得行的資料來渲染新表格
    useReactTable, // 使用此 Hook 來掌握表格
} from "@tanstack/react-table";
import axios from "axios";
import { Link } from "react-router-dom";
import { TableProp } from "../../../models/Layout/TableProp";


const InitialColumns = (cols: Array<ColumnsProp>, actions: ActionsProp) => {
    const columnHelper = createColumnHelper<any>();
    const result: any = [];

    //一般欄位
    cols.map(row => {
        if (row.hidden) return true;
        result.push(
            columnHelper.accessor(
                row.name,
                {
                    header: () => row.label,
                    cell: info => { return info.getValue(); }
                }
            )
        );
    });

    if (actions.isUse) {
        result.push(
            columnHelper.accessor(
                'Action',
                {
                    cell: (info) => {
                        let row = info.row.original;
                        console.log(row);
                        return (
                            <div>
                                {
                                    actions.data.map((value) => {
                                        switch (value) {
                                            case 0:
                                                return (<Link to={actions.editorUrl ?? ""}><button key={value} className="btn btn-outline-secondary mr-1 ml-1">Edit</button></Link>);
                                            case 1:
                                                return <button key={value} className="btn btn-outline-danger mr-1 ml-1">Delete</button>;
                                            case 40:
                                                return <button key={value} className="btn btn-outline-primary mr-1 ml-1">View</button>;
                                            case 50:
                                                return <button key={value} className="btn btn-outline-primary mr-1 ml-1">Print</button>;
                                            case 60:
                                                return <button key={value} className="btn btn-outline-primary mr-1 ml-1">Custom</button>;
                                            default:
                                                return null;
                                        }
                                    })}
                            </div>
                        );
                    }//cell: (info)
                }
            )
        )
    }

    return result;
}

const ReactTable = (prop: TableProp) => {
    const columns = InitialColumns(prop.columns, prop.actions);
    const dataset = (prop.data == undefined || prop.data == null) ? [] : prop.data;
    const [data, setData] = React.useState(() => [...dataset])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div>
            <table className="table table-boder">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>


        </div>
    );
}

export default ReactTable;