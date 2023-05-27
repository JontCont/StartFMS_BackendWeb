import React from "react";
import { ColumnsProp } from "../../../interface/table";
import { TableProp } from "../../../interface/table";
import {
    createColumnHelper, // 幫忙製作表格列的工具
    flexRender, // 其實就是 flex box
    getCoreRowModel, // 取得行的資料來渲染新表格
    useReactTable, // 使用此 Hook 來掌握表格
} from "@tanstack/react-table";



const columnHelper = createColumnHelper<any>();

const InitialColumns = (cols: Array<ColumnsProp>) => {
    const result: any = [];

    cols.map(row => {
        result.push(
            columnHelper.accessor(
                row.name,
                {
                    header: () => row.label,
                    cell: info => info.getValue()
                }
            )
        );
    });
    return result;
}

const ReactTable = (prop: TableProp) => {
    const columns = InitialColumns(prop.columns);
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