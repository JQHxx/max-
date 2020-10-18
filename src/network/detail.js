import {findItemsRequest} from "./request";

export function getFindDetail(page) {
  return findItemsRequest({
    url: '/detail/'+page,
  })
}

/* 数据构造器，当请求的单例数据过于庞杂，通过数据构造器整合单个组件的数据 */
/* 如商品信息 */


export class Goods {
  /* dataresult的字段 */
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}
/* const item = new Goods() */