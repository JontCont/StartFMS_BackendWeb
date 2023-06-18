import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SystemConfigType, getSystemConfig, putSystemConfig } from "../../../../services/backend";
import { CardBodyFrame, CardFrame, Content } from "../../../extensions/AdminLte";
import { toast } from "react-toastify";



const SytemConfigEdit = () => {
    const { id } = useParams();
    const [data, setData] = useState<SystemConfigType>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSystemConfig(id ?? "");
            setData(data);
        };
        fetchData();
    }, []);

    const onClickSave = () =>{
        console.log(data);
        let id = data?.parName || '';
        if(id == null || id == '' || data == null){
            toast.error('更新失敗! 請確認資料是否都有填寫');
            return false;
        }
        putSystemConfig(id,data);
    }


    return (
        <Content titleName="設定檔">
            <CardBodyFrame titleName="主檔">
                <div>
                    <label>參數名稱</label>
                    <div>
                        <input type="text"
                            value={data?.parName || ''}
                            onChange={(e) => setData((prevData: any) => ({ ...prevData, parName: e.target.value }))}
                            disabled={!(data?.parName == null)}
                        ></input>
                    </div>
                </div>
                <div>
                    <label>參數值</label>
                    <div>
                        <input type="text"
                            value={data?.parValue || ''}
                            onChange={(e) => setData((prevData: any) => ({ ...prevData, parValue: e.target.value }))}
                        ></input>
                    </div>
                </div>
                <div>
                    <label>說明</label>
                    <div>
                        <input type="text"
                            value={data?.parMemo || ''}
                            onChange={(e) => setData((prevData: any) => ({ ...prevData, parMemo: e.target.value }))}
                        ></input>
                    </div>
                </div>

                <div>
                    <button type='button' onClick={onClickSave}>儲存</button>
                </div>
            </CardBodyFrame>
        </Content>
    )
};


export default SytemConfigEdit;
