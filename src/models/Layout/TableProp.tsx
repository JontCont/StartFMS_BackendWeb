import { ColumnsProp } from "./ColumnsProp";
import { ActionsProp } from "./ActionsProp";

export class TableProp {
    constructor(
        public columns:ColumnsProp[],
        public actions : ActionsProp,
        public data?: any,
    ) {
        // this.columns = [
        //     { name: "id", label: "ID" },
        //     { name: "name", label: "名稱" },
        //     { name: "description", label: "描述" },
        //     { name: "isUse", label: "是否啟用" },
        //     { name: "editorUrl", label: "編輯網址" },
        //     { name: "actions", label: "動作" },
        // ];
        // this.actions = {
        //     isUse: true,
        //     data: [1, 2, 3, 4, 5],
        //     editorUrl: "/system/config/type/editor",
        // };
    }
};
