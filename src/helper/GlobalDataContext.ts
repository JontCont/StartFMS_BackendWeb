// RxJS v6+
import { BehaviorSubject } from "rxjs";

// 用法 : 這邊為占存全域變數的地方
// 若要使用請先在要使用的地方 import { GlobalDataService } from 'src/app/services/global-data.service';
// 然後在建構子中加入 private globalData: GlobalDataService
// 之後就可以使用 this.globalData.setData('變數名稱', 要存的值);
// 取值則是 this.globalData.getData('變數名稱');
// 刪除則是 this.globalData.deleteData('變數名稱');
// 這邊的變數名稱可以自己隨便取，但是要記得在其他地方也要用同樣的名稱才能取到值
export class GlobalDataContext {
  private dataSubject = new BehaviorSubject<any>({});
  data = this.dataSubject.asObservable();

  setData(name: string, value: any) {
    const currentData = this.dataSubject.value;
    const updatedData = { ...currentData, [name]: value };
    this.dataSubject.next(updatedData);
  }

  pushData(name: string, value: any) {
    const currentData = this.dataSubject.value;
    const updatedData = { ...currentData, [name]: [...currentData[name], value] };
    this.dataSubject.next(updatedData);
  }

  getData(name: string) {
    const currentData = this.dataSubject.value;
    return currentData[name] ?? null;
  }

  deleteData(name: string) {
    const currentData = this.dataSubject.value;
    if (currentData.hasOwnProperty(name)) {
      const deletedValue = currentData[name];
      delete currentData[name];
      this.dataSubject.next({ ...currentData }); // 更新
      return deletedValue; // 返回被删除的值
    }
    return null; // 如果屬性不存在，返回 null
  }
}
