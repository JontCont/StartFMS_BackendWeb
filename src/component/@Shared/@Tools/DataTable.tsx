import {
    createColumnHelper, // 幫忙製作表格列的工具
    flexRender, // 其實就是 flex box
    getCoreRowModel, // 取得行的資料來渲染新表格
    useReactTable, // 使用此 Hook 來掌握表格
} from "@tanstack/react-table";

export interface DataTableProp {
    className?: any,
    columns?: any,
    data?: any,
    columnsFormatter?: (columns:any) => void
};

const createColumns = (data: any, columns: any) => {
    const columnHelper = createColumnHelper<any>();
    const result: any = [];
    if (data != null && columns == null) {
        let firstData = data[0]
        let keys = Object.keys(firstData);
        keys.map((x: any) => {
            result.push(
                columnHelper.accessor(x,
                    {
                        header: () => x,
                        cell: info => { return info.getValue(); }
                    }
                )
            );
        })
        return result;
    }

    if (columns != null) {
        columns.map((row: any) => {
            if (row.hidden) return true;
            result.push(
                columnHelper.accessor(row.name,
                    {
                        header: () => row.label,
                        cell: info => { return info.getValue(); }
                    }
                )
            );
        });
        return result;
    }

    return [];
}

const DataTable = (prop: DataTableProp) => {
    const data = prop.data;
    const columns = createColumns(prop.data, prop.columns);
    if (prop.columnsFormatter != null) {
        prop.columnsFormatter(columns);
    }
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })


    const getColumns = () => {
        return (
            table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header =>
                    (
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
            )));
    }

    const getData = () => {
        return (
            table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))
        );
    }


    return (
        <div>
            <table className={prop.className}>
                <thead>
                    {getColumns()}
                </thead>
                <tbody>
                    {getData()}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;