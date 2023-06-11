import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardBodyFrame, Content, DataTable } from '../../../extensions/AdminLte';
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from 'react-router';
import { SystemConfigType, deleteSystemConfig, postSystemConfig } from '../../../../services/backend';
import { toast } from 'react-toastify';

const SystemConfigIndex = () => {
  const navigate = useNavigate();
  const [columns, setTstColumns] = useState(null);
  const [data, setData] = useState(null);
  const [form, setForm] = useState<SystemConfigType>();

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

    const onClickDeleteButton = (row: any) => {
      let key = Object.keys(row)[0];
      let val :string = row[key];
      deleteSystemConfig(val);
      console.log('delete');
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

  const onClickSave = () =>{
    if(form == null){
        toast.error('更新失敗! 請確認資料是否都有填寫');
        return false;
    }
    postSystemConfig(form);
}


  // 當資料還在加載時顯示的內容
  if (!columns || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Content titleName='SystemConfig'>
      <CardBodyFrame titleName="主檔">
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
      </CardBodyFrame>

      <CardBodyFrame titleName="Test Area">
        <DataTable
          className="table table-boder"
          data={data}
          columns={columns}
          columnsFormatter={columsCuston}
        ></DataTable>
      </CardBodyFrame>
    </Content>
  );
}

export default SystemConfigIndex;
