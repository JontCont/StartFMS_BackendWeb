import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardBodyFrame from '../../../@Shared/@Layout/Frame/CardBodyFrame';
import Content from '../../../@Shared/@Layout/Content';
import ReactTable from '../../../@Shared/@Tools/ReactTable';

const SystemConfigIndex = () => {
  const [tstcolumns, setTstColumns] = useState(null);
  const [data, setData] = useState(null);
  const tstactions = {
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

  // 當資料還在加載時顯示的內容
  if (!tstcolumns || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Content titleName='SystemConfig'>
      <CardBodyFrame titleName="Test Area">
        <ReactTable
          columns={tstcolumns}
          data={data}
          actions={tstactions}
        />
      </CardBodyFrame>
    </Content>
  );
}

export default SystemConfigIndex;
