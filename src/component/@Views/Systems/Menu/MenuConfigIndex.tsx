import React, { useState, useEffect, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Services, ServicesContext } from '../../../../services/services';
import { CardFrame, Content } from '../../../extensions/AdminLte';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { toast } from "react-toastify";
import { S01MenuBasicSetting } from '../../../../models/System/S01MenuBasicSetting';

const MenuConfigIndex = () => {
  const services: Services | null = useContext(ServicesContext);
  let emptyProduct = {
  } as S01MenuBasicSetting;
  //DataTable Config (prop)
  const [dataTables, setDataTables] = useState<any>([]);
  const [models, setSysConfig] = useState<S01MenuBasicSetting>(emptyProduct);

  //Dialog (prop)
  const [SysConfigDialog, setSysConfigDialog] = useState<any>({ IsOpen: false, Type: '' });
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);

  //Dialog Function
  const hideDialog = () => {
    setSysConfigDialog({ IsOpen: false, Type: '' });
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const openNew = () => {
    setSysConfig(emptyProduct);
    setSysConfigDialog({ IsOpen: true, Type: 'New' });
  };

  const editProduct = (prop: S01MenuBasicSetting) => {
    setSysConfig({ ...prop });
    setSysConfigDialog({ IsOpen: true, Type: 'Edit' });
  };

  const confirmDeleteProduct = (prop: S01MenuBasicSetting) => {
    setSysConfig({ ...prop });
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    services?.backend.deleteDirectory(models.id).then(() => {
      services?.backend.getDirectoryByData().then((data: any) => setDataTables(data));
      setDeleteProductDialog(false);
      setSysConfig(emptyProduct);
    }).catch(() => {
      toast.error('刪除失敗請重新確認');
    });
  };

  const saveProduct = () => {
    if (SysConfigDialog.Type == "Edit") {
      services?.backend.putDirectory(models.id, models)
        .then(() => {
          services?.backend.getDirectoryByData().then((data: any) => setDataTables(data));
          setSysConfig(emptyProduct);
          setSysConfigDialog({ IsOpen: false, Type: '' });
        })
        .catch(() => {
          toast.error('刪除失敗請重新確認');
          return false;
        });
    } else {
      services?.backend.postDirectory(models)
        .then(() => {
          services?.backend.getDirectoryByData().then((data: any) => setDataTables(data));
          setSysConfig(emptyProduct);
          setSysConfigDialog({ IsOpen: false, Type: '' });
        })
        .catch(() => {
          toast.error('刪除失敗請重新確認');
          return false;
        });
    }
  };

  const onInputChange = (e: any, name: string) => {
    const val = (e.target && e.target.value) || '';
    let _models: any = { ...models };
    _models[`${name}`] = val;
    setSysConfig(_models);
  };

  //datatable tempale
  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button icon="fa fa-pen" rounded outlined className="mr-2 small-icon" onClick={() => editProduct(rowData)} />
        <Button icon="fa fa-trash" rounded outlined severity="danger" className='small-icon' onClick={() => confirmDeleteProduct(rowData)} />
      </React.Fragment>
    );
  };

  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
    </React.Fragment>
  );

  const SysConfigDialogFooter = (
    <React.Fragment>
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
    </React.Fragment>
  );

  // react function
  useEffect(() => {
    services?.backend.getDirectoryByData().then((data: any) => { console.log(data); setDataTables(data); });
  }, []);

  return (
    <Content titleName='目錄設定檔'>
      <CardFrame titleName='' IsCardTitle={false}>
        <div className="flex flex-wrap gap-2">
          <Button label="加入" className='btn' severity="success" onClick={openNew} />
        </div>
      </CardFrame>
      <CardFrame titleName='資料檔案' cardBodyStyle='p-0'>
        <DataTable value={dataTables} paginator
          rowsPerPageOptions={[15, 50, 100]} rows={15} globalFilterFields={['menuName']} emptyMessage="No customers found.">
          <Column header="名稱" field="menuName" sortable></Column>
          <Column header="網址" field="url" sortable></Column>
          <Column header="圖示(Icon)" field="icon"></Column>
          <Column header="顯示順序" field="displayOrder"></Column>
          <Column header="操作" body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
        </DataTable>
      </CardFrame>

      <Dialog modal visible={SysConfigDialog.IsOpen} style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header={(SysConfigDialog.Type == "Edit") ? "編輯 Edit" : "新增 Create"} className="p-fluid"
        footer={SysConfigDialogFooter}
        onHide={hideDialog}>

        <div className="field">
          <label htmlFor="parName" className="font-bold">名稱</label>
          <InputText value={models.menuName} onChange={(e: any) => onInputChange(e, 'menuName')} disabled={(SysConfigDialog.Type == "Edit") ? true : false} />
        </div>
        <div className="field">
          <label htmlFor="parValue" className="font-bold">階層</label>
          <InputText value={models.parentId ?? ''} onChange={(e: any) => onInputChange(e, 'parentId')} required />
        </div>
        <div className="field">
          <label htmlFor="parValue" className="font-bold">預設網址</label>
          <InputText value={models.url ?? ''} onChange={(e: any) => onInputChange(e, 'url')} required />
        </div>
        <div className="field">
          <label htmlFor="parValue" className="font-bold">顯示順序</label>
          <InputNumber  value={models.displayOrder} onChange={(e: any) => onInputChange(e, 'displayOrder')} required />
        </div>
        <div className="field">
          <label htmlFor="parMemo" className="font-bold">圖示</label>
          <InputText value={models.icon ?? ''} onChange={(e) => onInputChange(e, 'icon')} />
        </div>
      </Dialog>


      <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
        <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          {models && (
            <span>
              您是否確定刪除 <b className='text-danger'>"{models.menuName}"</b> ?
            </span>
          )}
        </div>
      </Dialog>
    </Content>
  );
}

export default MenuConfigIndex;
