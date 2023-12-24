import React, { useEffect, useState } from "react";
import {
  createColumnHelper, // 幫忙製作表格列的工具
  flexRender, // 其實就是 flex box
  getCoreRowModel, // 取得行的資料來渲染新表格
  useReactTable, // 使用此 Hook 來掌握表格
} from "@tanstack/react-table";
//理財紀錄 (以下都不使用資料庫，只是紀錄)
// 1. 需要紀錄角色、日期、金額、備註
// 2. 顯示紀錄列表
// 3. 新增紀錄
// 4. 修改紀錄
// 5. 刪除紀錄
// 6. 查詢紀錄

type financial = {
  role: string;
  date: string;
  amount: number;
  note: string;
};

const FinancialRecords: React.FC = () => {
  const columnHelper = createColumnHelper<financial>();
  let defaultData: financial[] = [];
  const columns = [
    columnHelper.accessor("role", {
      cell: (info) => info.getValue(),
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.date, {
      id: "date",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Date</span>,
    }),
    columnHelper.accessor((row) => row.amount, {
      id: "amount",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Amount</span>,
    }),
    columnHelper.accessor((row) => row.note, {
      id: "note",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Note</span>,
    }),
  ];
  const table = useReactTable({
    columns,
    data: [...defaultData],
    getCoreRowModel: getCoreRowModel(),
  });

  //
  useEffect(() => {}, []);
  let [userName, setUserName] = useState('');

  return (
    <div>
      <div>
        <h2>FinancialRecords</h2>
      </div>
      <div>
        <div>
          <label>名字</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>對象(選填)</label>
          {/* <input type="text" onChange={(e) => setOname(e.target.value)} /> */}
        </div>
        <div>
          <label>金額</label>
          {/* <input type="text" onChange={(e) => setCash(e.target.value)} /> */}
        </div>
        <div>
          <label>日期</label>
          {/* <input type="date" onChange={(e) => setDate(e.target.value)} /> */}
        </div>
        <input
          type="button"
          className="btn btn-success"
          onClick={() => {
            console.log("確認");
          }}
          value="確認"
        />
      </div>
      <div>
        <table className="table table-boder">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
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
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
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
      </div>
    </div>
  );
};

export default FinancialRecords;
