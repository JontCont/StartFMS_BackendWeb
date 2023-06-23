import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CardBodyFrame, CardFrame, Confirm, Content, DataTable, ModalFrame } from '../../../extensions/AdminLte';
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { SystemConfigType } from '../../../../services/backend';
import { Services, ServicesContext } from '../../../../services/services';
import { ConfirmProp } from '../../../@Shared/@Tools/Confirm';

const SystemConfigIndex = () => {
  const navigate = useNavigate();
  const [columns, setTstColumns] = useState(null);
  const [data, setData] = useState(null);
  const [form, setForm] = useState<SystemConfigType>();
  const services: Services | null = useContext(ServicesContext);
  const [showModal, setShowModal] = React.useState(false);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const buttonsSetting = {
    isUse: true,
    data: [0, 1],
    url: 'https://localhost:5001/api/user/MenuBasicSetting/{id}'
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://localhost:5001/api/backend/sys/SystemConfigSetting');
      setTstColumns(response.data.columns);
      setData(response.data.data);
    };
    fetchData();
  }, []);

  const columsCuston = (columns: any) => {
    const onClickEditButton = (row: any) => {
      let key = Object.keys(row)[0];
      let val = row[key];
      navigate(`${window.location.pathname}/${val}`);
    }



    const columnHelper = createColumnHelper<any>();
    columns.push(
      columnHelper.accessor('action',
        {
          header: () => 'action',
          cell: (info) => {
            let row = info.row.original;
            return (
              <div>
                <button className="btn btn-outline-secondary mr-1 ml-1" onClick={() => onClickEditButton(row)}>Edit</button>
                <button className="btn btn-outline-danger mr-1 ml-1" onClick={() => onClickDeleteButton(row)}>Delete</button>
              </div>
            );
          }
        }
      )
    );
  }

  const onClickSave = () => {
    if (form == null) {
      toast.error('更新失敗! 請確認資料是否都有填寫');
      return false;
    }
    services?.backend.postSystemConfig(form);
  }


  // 當資料還在加載時顯示的內容
  if (!columns || !data) {
    return <div>Loading...</div>;
  }
  
  const onClickDeleteButton = (row: any) => {
    setShowConfirm(true);
    // Confirm({id="delete", }:confirmProp);

    // let key = Object.keys(row)[0];
    // let val: string = row[key];
    // services?.backend.deleteSystemConfig(val);
    // console.log('delete');
  }

  const handleCancel = () => {
    setShowConfirm(false);
    // 取消操作的逻辑...
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    // 确认操作的逻辑...
  };
  const confirmProps: ConfirmProp = {
    isOpen: showConfirm,
    onCancel: handleCancel,
    onConfirm: handleConfirm,
  };

  return (
    <Content titleName='SystemConfig'>
      <Confirm {...confirmProps} />
      <div className='col-12 mb-2 mt-2'>
        <button type='button' className='btn btn-success' onClick={() => setShowModal(true)}>Create</button>
      </div>

      <CardFrame titleName="Test Area" cardBodyStyle='p-0' IsCardTitle={false}>
        <DataTable
          className="table table-boder table-striped"
          data={data}
          columns={columns}
          columnsFormatter={columsCuston}
        ></DataTable>
      </CardFrame>



      <ModalFrame isOpen={showModal} closeModal={() => setShowModal(false)}>
        <div>
          <label>參數名稱</label>
          <div>
            <input type="text"
              value={form?.parName || ''}
              onChange={(e) => setForm((prevData: any) => ({ ...prevData, parName: e.target.value }))}
            ></input>
          </div>
        </div>
        <div>
          <label>參數值</label>
          <div>
            <input type="text"
              value={form?.parValue || ''}
              onChange={(e) => setForm((prevData: any) => ({ ...prevData, parValue: e.target.value }))}
            ></input>
          </div>
        </div>
        <div>
          <label>說明</label>
          <div>
            <input type="text"
              value={form?.parMemo || ''}
              onChange={(e) => setForm((prevData: any) => ({ ...prevData, parMemo: e.target.value }))}
            ></input>
          </div>
        </div>

        <div>
          <button type='button' onClick={onClickSave}>儲存</button>
        </div>
      </ModalFrame>
    </Content>
  );
}

export default SystemConfigIndex;
