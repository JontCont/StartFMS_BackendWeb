/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { toast } from "react-toastify";
import { CardFrame, Content } from "../../../extensions/AdminLte";
import { ServicesContext } from "../../../../services/services";
import { SystemParameterProperty } from "../../../../models/System/SystemParameterProperty";

const SystemParameter = () => {
  const services = useContext(ServicesContext);
  const emptyProduct: SystemParameterProperty = { Id: 0, Name: "" };
  const [dataTables, setDataTables] = useState<SystemParameterProperty[]>([]);
  const [sysConfig, setSysConfig] =
    useState<SystemParameterProperty>(emptyProduct);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    ParName: { value: null, matchMode: FilterMatchMode.CONTAINS },
    ParValue: { value: null, matchMode: FilterMatchMode.CONTAINS },
    ParMemo: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [sysConfigDialog, setSysConfigDialog] = useState({
    isOpen: false,
    type: "",
  });
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);

  const hideDialog = () => {
    setSysConfigDialog({ isOpen: false, type: "" });
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const openNew = () => {
    setSysConfig(emptyProduct);
    setSysConfigDialog({ isOpen: true, type: "New" });
  };

  const editProduct = (prop: SystemParameterProperty, index: number) => {
    setSysConfig({ ...prop });
    setSysConfigDialog({ isOpen: true, type: "Edit" });
  };

  const confirmDeleteProduct = (
    prop: SystemParameterProperty,
    index: number
  ) => {
    setSysConfig({ ...prop });
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    const updatedDataTables = [...dataTables];
    setDataTables(updatedDataTables);
    setSysConfig(emptyProduct);
    setDeleteProductDialog(false);
    toast.success("刪除成功");
  };

  const saveProduct = () => {
    const updatedDataTables = [...dataTables];
    setDataTables(updatedDataTables);
    setSysConfig(emptyProduct);
    setSysConfigDialog({ isOpen: false, type: "" });
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    const val = e.target.value || "";
    setSysConfig((prevSysConfig) => ({
      ...prevSysConfig,
      [name]: val,
    }));
  };

  const actionBodyTemplate = (
    rowData: SystemParameterProperty,
    options: any
  ) => {
    return (
      <>
        <Button
          icon="fa fa-pen"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProduct(rowData, options.rowIndex)}
        />
        <Button
          icon="fa fa-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData, options.rowIndex)}
        />
      </>
    );
  };

  const deleteProductDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </>
  );

  const sysConfigDialogFooter = (
    <>
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
    </>
  );

  useEffect(() => {}, []);

  return (
    <Content titleName="系統參數">
      <CardFrame titleName="" IsCardTitle={false}>
        <div className="flex flex-wrap gap-2">
          <Button
            label="加入"
            className="btn"
            severity="success"
            onClick={openNew}
          />
        </div>
      </CardFrame>

      <CardFrame titleName="資料檔案" cardBodyStyle="p-0">
        <DataTable
          value={dataTables}
          filters={filters}
          paginator
          showGridlines
          rowsPerPageOptions={[15, 50, 100]}
          rows={15}
          filterDisplay="row"
          globalFilterFields={["ParName", "ParValue", "ParMemo"]}
          emptyMessage="No customers found."
        >
          <Column
            header="名稱"
            field="ParName"
            sortable
            filter
            filterPlaceholder="請輸入名稱"
          ></Column>
          <Column
            header="參數"
            field="ParValue"
            sortable
            filter
            filterPlaceholder="請輸入參數"
          ></Column>
          <Column
            header="備註"
            field="ParMemo"
            sortable
            filter
            filterPlaceholder="請輸入備註"
          ></Column>
          <Column
            header="操作"
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
      </CardFrame>

      <Dialog
        modal
        visible={sysConfigDialog.isOpen}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header={sysConfigDialog.type === "Edit" ? "編輯 Edit" : "新增 Create"}
        className="p-fluid"
        footer={sysConfigDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label htmlFor="parName" className="font-bold">
            名稱
          </label>
          <InputText
            id="parName"
            onChange={(e) => onInputChange(e, "ParName")}
            disabled={sysConfigDialog.type === "Edit"}
          />
        </div>
        <div className="field">
          <label htmlFor="parValue" className="font-bold">
            參數
          </label>
          <InputText
            id="parValue"
            onChange={(e) => onInputChange(e, "ParValue")}
          />
        </div>
        <div className="field">
          <label htmlFor="parMemo" className="font-bold">
            備註
          </label>
          <InputTextarea
            id="parMemo"
            onChange={(e) => onInputChange(e, "ParMemo")}
            required
            rows={3}
            cols={20}
          />
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {sysConfig && (
            <span>
              您是否確定刪除 <b>""</b> ?
            </span>
          )}
        </div>
      </Dialog>
    </Content>
  );
};

export default SystemParameter;
