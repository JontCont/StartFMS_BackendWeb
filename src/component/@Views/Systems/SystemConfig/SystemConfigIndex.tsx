import React, { useState, useEffect, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Services, ServicesContext } from '../../../../services/services';
import { CardFrame, Content } from '../../../extensions/AdminLte';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { SystemConfigType } from '../../../../services/backend';
import { toast } from "react-toastify";

const SystemConfigIndex = () => {
  //initial data (prop)
  let emptyProduct: SystemConfigType = {
    ParMemo: '',
    ParName: '',
    ParValue: ''
  };
  const services: Services | null = useContext(ServicesContext);

  //DataTable Config (prop)
  const [dataTables, setDataTables] = useState<any>([]);
  const [sysConfig, setSysConfig] = useState<SystemConfigType>(emptyProduct);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'ParName': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'ParValue': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'ParMemo': { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

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

  const editProduct = (prop: SystemConfigType) => {
    setSysConfig({ ...prop });
    setSysConfigDialog({ IsOpen: true, Type: 'Edit' });
  };

  const confirmDeleteProduct = (prop: SystemConfigType) => {
    setSysConfig({ ...prop });
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    services?.backend.deleteSystemConfig(sysConfig.ParName).then(() => {
      services?.backend.getSystemConfigByData().then((data: any) => setDataTables(data));
      setDeleteProductDialog(false);
      setSysConfig(emptyProduct);
    }).catch(() => {
      toast.error('刪除失敗請重新確認');
    });
  };

  const saveProduct = () => {
    if (SysConfigDialog.Type == "Edit") {
      services?.backend.putSystemConfig(sysConfig.ParName, sysConfig)
        .then(() => {
          services?.backend.getSystemConfigByData().then((data: any) => setDataTables(data));
          setSysConfig(emptyProduct);
          setSysConfigDialog({ IsOpen: false, Type: '' });
        })
        .catch(() => {
          toast.error('刪除失敗請重新確認');
          return false;
        });
    } else {
      services?.backend.postSystemConfig(sysConfig)
        .then(() => {
          services?.backend.getSystemConfigByData().then((data: any) => setDataTables(data));
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
    let _sysConfig: any = { ...sysConfig };
    _sysConfig[`${name}`] = val;
    setSysConfig(_sysConfig);
  };

  //datatable tempale
  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button icon="fa fa-pen" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
        <Button icon="fa fa-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
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
    services?.backend.getSystemConfigByData().then((data: any) => setDataTables(data));
  }, []);

  return (
    <Content titleName='系統參數'>
      <CardFrame titleName='' IsCardTitle={false}>
        <div className="flex flex-wrap gap-2">
          <Button label="Create" className='btn' severity="success" onClick={openNew} />
        </div>
      </CardFrame>

      <CardFrame titleName='資料檔案' cardBodyStyle='p-0'>
        <DataTable value={dataTables.data} filters={filters} paginator showGridlines 
          rowsPerPageOptions={[15, 50, 100]} rows={15}
          filterDisplay="row" globalFilterFields={['ParName', 'ParValue', 'ParMemo']} emptyMessage="No customers found.">
          <Column header="名稱" field="ParName" sortable filter filterPlaceholder="請輸入名稱"   ></Column>
          <Column header="參數" field="ParValue" sortable filter filterPlaceholder="請輸入參數"  ></Column>
          <Column header="備註" field="ParMemo" sortable filter filterPlaceholder="請輸入備註"   ></Column>
          <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
        </DataTable>
      </CardFrame>

      <Dialog modal visible={SysConfigDialog.IsOpen} style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header={(SysConfigDialog.Type == "Edit")?"編輯 Edit":"新增 Create"} className="p-fluid"
        footer={SysConfigDialogFooter}
        onHide={hideDialog}>

        <div className="field">
          <label htmlFor="parName" className="font-bold">名稱</label>
          <InputText id="parName" value={sysConfig.ParName} onChange={(e: any) => onInputChange(e, 'ParName')} disabled={(SysConfigDialog.Type == "Edit") ? true : false} />
        </div>
        <div className="field">
          <label htmlFor="parValue" className="font-bold">參數</label>
          <InputText id="parValue" value={sysConfig.ParValue} onChange={(e: any) => onInputChange(e, 'ParValue')} />
        </div>
        <div className="field">
          <label htmlFor="parMemo" className="font-bold">備註</label>
          <InputTextarea id="parMemo" value={sysConfig.ParMemo} onChange={(e) => onInputChange(e, 'ParMemo')} required rows={3} cols={20} />
        </div>
      </Dialog>


      <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
        <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          {sysConfig && (
            <span>
              您是否確定刪除 <b>"{sysConfig.ParName}"</b> ?
            </span>
          )}
        </div>
      </Dialog>
    </Content>
  );
}

export default SystemConfigIndex;
