/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
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
  const emptyProduct: SystemParameterProperty = { id: 0, name: "" };
  const [dataTables, setDataTables] = useState<SystemParameterProperty[]>([]);
  const [sysConfig, setSysConfig] =
    useState<SystemParameterProperty>(emptyProduct);

  const [sysConfigDialog, setSysConfigDialog] = useState({
    isOpen: false,
    type: "",
  });

  const columns = [
    { field: "id", header: "識別碼" },
    { field: "name", header: "參數名稱" },
    { field: "value1", header: "參數1" },
    { field: "value2", header: "參數2" },
    { field: "value3", header: "參數3" },
    { field: "description", header: "備註" },
  ];
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);

  useEffect(() => {
    services.system.getSystemParameterList().then((res) => {
      setDataTables(res);
    });
  }, [services.system]);

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
    services.system.deleteSystemParameter(sysConfig.id).then((res) => {
      services.system.getSystemParameterList().then((res) => {
        setDataTables(res);
      });
      toast.success("儲存成功");
      hideDeleteProductDialog();
    });
  };

  const saveProduct = () => {
    if (sysConfig.id > 0) {
      services.system.updateSystemParameter(sysConfig).then((res) => {
        if (res) {
          services.system.getSystemParameterList().then((res) => {
            setDataTables(res);
          });
          toast.success("儲存成功");
          hideDialog();
        } else {
          toast.error("儲存失敗");
        }
      });
    } else {
      services.system.addSystemParameter(sysConfig).then((res) => {
        if (res) {
          services.system.getSystemParameterList().then((res) => {
            setDataTables(res);
          });
          toast.success("儲存成功");
          hideDialog();
        } else {
          toast.error("儲存失敗");
        }
      });
    }
  };

  const onInputChange = (e: any, name: string) => {
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
          outlined
          severity="success"
          className="mr-2 p-1"
          onClick={() => editProduct(rowData, options.rowIndex)}
        />
        <Button
          icon="fa fa-trash"
          outlined
          severity="danger"
          className="p-1"
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

  return (
    <Content titleName="參數設定">
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
          className="table table-bordered table-striped mb-0"
          value={dataTables}
          paginator
          showGridlines
          rowsPerPageOptions={[15, 50, 100]}
          rows={15}
        >
          {columns.map((col, i) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              sortable
            />
          ))}
          <Column
            header="操作"
            body={actionBodyTemplate}
            exportable={false}
            style={{ width: "12rem" }}
          ></Column>
        </DataTable>
      </CardFrame>

      <Dialog
        modal
        visible={sysConfigDialog.isOpen}
        style={{ width: "32rem" }}
        header={sysConfigDialog.type === "Edit" ? "編輯 Edit" : "新增 Create"}
        className="p-fluid"
        footer={sysConfigDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label className="font-bold">名稱</label>
          <InputText
            value={sysConfig.name}
            onChange={(e) => onInputChange(e, "name")}
            disabled={sysConfigDialog.type === "Edit"}
          />
        </div>
        <div className="field">
          <label className="font-bold">參數1</label>
          <InputText
            value={sysConfig.value1}
            onChange={(e) => onInputChange(e, "value1")}
          />
        </div>
        <div className="field">
          <label className="font-bold">參數2</label>
          <InputText
            value={sysConfig.value2}
            onChange={(e) => onInputChange(e, "value2")}
          />
        </div>
        <div className="field">
          <label className="font-bold">參數3</label>
          <InputText
            value={sysConfig.value3}
            onChange={(e) => onInputChange(e, "value3")}
          />
        </div>
        <div className="field">
          <label className="font-bold">備註</label>
          <InputTextarea
            value={sysConfig.description}
            onChange={(e) => onInputChange(e, "description")}
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
              您是否確定刪除 <b>"{sysConfig.name}"</b> ?
            </span>
          )}
        </div>
      </Dialog>
    </Content>
  );
};

export default SystemParameter;
