import React from "react";
import Content from "../../@Shared/@Layout/Content";
import CardBodyFrame from "../../@Shared/@Layout/Frame/CardBodyFrame";
import {
    createColumnHelper, // 幫忙製作表格列的工具
    flexRender, // 其實就是 flex box
    getCoreRowModel, // 取得行的資料來渲染新表格
    useReactTable, // 使用此 Hook 來掌握表格
} from "@tanstack/react-table";
import { ColumnsProp } from "../../../models/System/ColumnsProp";
import ReactTable from "../../@Shared/@Tools/ReactTable";


type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}

const defaultData: Person[] = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.accessor('firstName', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('visits', {
        header: () => <span>Visits</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        footer: info => info.column.id,
    }),
    columnHelper.accessor('progress', {
        header: 'Profile Progress',
        footer: info => info.column.id,
    }),
]

const tstcolumns: Array<ColumnsProp> = [
    {
        name: "firstName",
        label: "firstName3",
    },
    {
        name: "lastName",
        label: "lastName2",
    },
    {
        name: "status",
        label: "status",
    },
    {
        name: "age",
        label: "age1",
        hidden: true
    }
];

const tstactions = {
    isUse: true,
    data: [0, 1],
    url: 'https://localhost:5001/api/user/MenuBasicSetting/{id}'
};

const SampleReactTable = () => {
    const [data, setData] = React.useState(() => [...defaultData])
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <Content titleName="React Table">
            <CardBodyFrame titleName="React Table">
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
                    <tfoot>
                        {table.getFooterGroups().map(footerGroup => (
                            <tr key={footerGroup.id}>
                                {footerGroup.headers.map(header => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.footer,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </tfoot>
                </table>
            </CardBodyFrame>


            <CardBodyFrame titleName="Test Area" >
                <ReactTable 
                    columns={tstcolumns} 
                    data={defaultData}
                    actions={tstactions}></ReactTable>
            </CardBodyFrame>
        </Content>


    );
}

export default SampleReactTable;